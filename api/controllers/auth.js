const User = require("../models/user");
const { errorHandler } = require("../utils/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return next(errorHandler(401, "User already registered."));

    const hashedPassword = bcrypt.hashSync(password, 10);

    user = new User({ username, email, password: hashedPassword });
    await user.save();

    user.password = null;

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// User login (Login)
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandler(404, "User not found."));
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return next(errorHandler(400, "Invalid password."));
    }

    user.password = null;

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    if (token) {
      res.status(200).json({
        user: {
          token,
          id: user.id,
          email: user.email,
          username: user.username,
          role: user.role,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
