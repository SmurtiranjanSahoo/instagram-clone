const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ error: "Not able to save user in DB" });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};
