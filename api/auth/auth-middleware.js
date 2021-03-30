const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

const checkPayload = (req, res, next) => {
  const { username, password } = req.body;
  const valid = Boolean(username && password && typeof password === "string");

  if (valid) {
    next();
  } else {
    res.status(422).json({
      message:
        "please provide username and password and the password shoud be alphanumeric",
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
  restricted,
};
