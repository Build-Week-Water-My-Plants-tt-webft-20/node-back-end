const User = require("./users-model");

const checkUserId = async (req, res, next) => {
  try {
    const user = await User.findById(parseInt(req.params.user_id));
    if (!user) {
      res.status(404).json({
        message: `user with user_id ${req.params.user_id} not found`,
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkUserId };
