const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

const checkPayload = (req, res, next) => {
  const { user_username, user_password, user_phone_number } = req.body;
  if (
    user_username &&
    user_password &&
    user_phone_number &&
    typeof user_password === "string" &&
    typeof user_phone_number === "number"
  ) {
    next();
  } else {
    res.status(422).json({
      message:
        "please provide username, password, and phone number and the password shoud be alphanumeric",
    });
  }
};

const checkLoginPayload = (req, res, next) => {
  const { user_username, user_password } = req.body;
  if (user_username && user_password) {
    next();
  } else {
    res.status(422).json({
      message: "please provide username and password",
    });
  }
};

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json("I can haz token?");
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json("The token is bad ): " + err.meassage);
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};

module.exports = {
  checkPayload,
  checkLoginPayload,
  restricted,
};
