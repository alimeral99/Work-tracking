const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return res.status(401).json("User already registered.");

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
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json("User not found.");
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json("Invalid password.");
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
          emai: user.email,
          username: user.username,
          role: user.role,
        },
      });
    }
  } catch (error) {
    res.status(500).json("Server error.");
  }
};

module.exports = {
  register,
  login,
};
