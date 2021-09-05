const User = require("../models/user");
const formidable = require("formidable");
const fs = require("fs");

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
  if (
    req.profile.saved?.includes(req.body.saved) ||
    req.profile.followings?.includes(req.body.followings) ||
    req.profile.followers?.includes(req.body.followers)
  ) {
    User.findByIdAndUpdate(
      { _id: req.profile._id },
      {
        $pull: {
          saved: req.body.saved,
          followings: req.body.followings,
          followers: req.body.followers,
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
          website: req.body.website ? req.body.website : req.profile.website,
          bio: req.body.bio ? req.body.bio : req.profile.bio,
        },
        $addToSet: {
          saved: req.body.saved ? req.body.saved : req.profile.saved,
          followings: req.body.followings
            ? req.body.followings
            : req.profile.followings,
          followers: req.body.followers
            ? req.body.followers
            : req.profile.followers,
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

exports.updateUserProfilePhoto = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }

    let user = req.profile;

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!",
        });
      }
      user.photo.data = fs.readFileSync(file.photo.path);
      user.photo.contentType = file.photo.type;
    }

    //save to the DB
    user.save((err, user) => {
      if (err) {
        res.status(400).json({
          error: "Saving user photo in DB failed",
        });
      }
      res.json(user);
    });
  });
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

// middleware
exports.photo = (req, res, next) => {
  if (req.profile.photo.data) {
    res.set("Content-Type", req.profile.photo.contentType);
    return res.send(req.profile.photo.data);
  }
  next();
};
