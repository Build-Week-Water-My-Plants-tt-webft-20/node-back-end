const router = require("express").Router();

const User = require("./users-model");

router.get("/", (req, res, next) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:user_id", (req, res, next) => {
  const { user_id } = req.params;
  User.findById(user_id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
