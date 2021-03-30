const router = require("express").Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

const User = require("../users/users-model");
const { checkPayload, checkLoginPayload } = require("./auth-middleware");

const makeToken = (user) => {
  const payload = {
    subject: user.user_id,
    user_username: user.user_username,
    user_phone_number: user.user_phone_number,
  };
  const options = {
    expireIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
};

router.post("/register", checkPayload, async (req, res, next) => {
  let user = req.body;
  const rounds = parseInt(process.env.BCRYPT_ROUNDS);
  const hash = bcrypt.hashSync("ladygaga", rounds);
  user.user_password = hash;
  User.add(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch(next);
});

router.post("/login", checkLoginPayload, (req, res, next) => {
  let { user_username, user_password } = req.body;
  User.findBy({ user_username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(user_password, user.user_password)) {
        const token = makeToken(user);
        res.status(200).json({
          message: `Welcome ${user.user_username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.json("Can't log out");
      } else {
        res.status(200).json({ message: "logged out" });
      }
    });
  } else {
    res.status(500).json({ message: "no session" });
  }
});

module.exports = router;
