const checkPremiumUser = async (req, res, next) => {
  const user = req.user;

  if (!user.role === "premium") {
    return res.status(403).json("only premium user can use it");
  }

  next();
};

module.exports = {
  checkPremiumUser,
};
