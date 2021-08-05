const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  return res.json(req.profile);
};

exports.getUserbyUsername = (req, res) => {
  let query = req.body.username;
  User.find({
    username: query,
  }).exec((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "NO user FOUND",
      });
    }
    res.json(user);
  });
};

exports.updateUser = (req, res) => {
  if (req.profile.saved?.includes(req.body.saved)) {
    User.findByIdAndUpdate(
      { _id: req.profile._id },
      {
        $pull: {
          saved: req.body.saved,
        },
      },
      { new: true, useFindAndModify: false },
      (err, user) => {
        if (err) {
          return res.status(400).json({
            error: "You are not authorized to update this user",
          });
        }
        user.salt = undefined;
        user.encry_password = undefined;
        res.json(user);
      }
    );
  } else {
    User.findByIdAndUpdate(
      { _id: req.profile._id },
      {
        $set: {
          name: req.body.name ? req.body.name : req.profile.name,
          email: req.body.email ? req.body.email : req.profile.email,
          username: req.body.username
            ? req.body.username
            : req.profile.username,
        },
        $addToSet: {
          saved: req.body.saved ? req.body.saved : req.profile.saved,
        },
      },
      { new: true, useFindAndModify: false },
      (err, user) => {
        if (err) {
          return res.status(400).json({
            error: "You are not authorized to update this user",
          });
        }
        user.salt = undefined;
        user.encry_password = undefined;
        res.json(user);
      }
    );
  }
};

exports.getAllUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "NO user FOUND",
      });
    }
    res.json(users);
  });
};
