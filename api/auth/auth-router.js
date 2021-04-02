const router = require("express").Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

const User = require("../users/users-model");
const {
  checkPayload,
  checkLoginPayload,
  checkUsernameFree,
  checkUsernameExists,
} = require("./auth-middleware");

const makeToken = (user) => {
  const payload = {
    subject: user.user_id,
    user_username: user.user_username,
    user_phone_number: user.user_phone_number,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
};

router.post(
  "/register",
  checkPayload,
  checkUsernameFree,
  async (req, res, next) => {
    let user = req.body;
    const rounds = parseInt(process.env.BCRYPT_ROUNDS);
    const hash = bcrypt.hashSync(user.user_password, rounds);
    user.user_password = hash;
    User.add(user)
      .then((saved) => {
        res.status(201).json(saved);
      })
      .catch(next);
  }
);

router.post(
  "/login",
  checkLoginPayload,
  checkUsernameExists,
  (req, res, next) => {
    let { user_username, user_password } = req.body;
    User.findBy({ user_username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(user_password, user.user_password)) {
          const token = makeToken(user);
          res.status(200).json({
            user_username: user_username,
            user_id: user.user_id,
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(next);
  }
);

module.exports = router;
