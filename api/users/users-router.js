const router = require("express").Router();

const User = require("./users-model");
const { restricted } = require("../auth/auth-middleware");
const { checkUserId } = require("./users-middleware");

router.get("/", restricted, (req, res, next) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:user_id", restricted, checkUserId, (req, res, next) => {
  const { user_id } = req.params;
  User.findById(user_id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
