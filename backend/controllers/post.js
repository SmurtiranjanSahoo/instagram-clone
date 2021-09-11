const Post = require("../models/post");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getPostById = (req, res, next, id) => {
  Post.findById(id)
    .populate("postAuthor comments.commentAuthor")
    .exec((err, post) => {
      if (err) {
        return res.status(400).json({
          error: "Post not found",
        });
      }
      req.post = post;
      next();
    });
};

exports.createPost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }

    //destructure the fields
    const { caption } = fields;

    let post = new Post(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!",
        });
      }
      post.photo.data = fs.readFileSync(file.photo.path);
      post.photo.contentType = file.photo.type;
    }
    // console.log(post);

    //save to the DB
    post.save((err, post) => {
      if (err) {
        res.status(400).json({
          error: "Saving tshirt in DB failed",
        });
      }
      res.json(post);
    });
  });
};

exports.getPost = (req, res) => {
  req.post.photo = undefined;
  return res.json(req.post);
};

exports.deletePost = (req, res) => {
  let post = req.post;
  post.remove((err, deletedPost) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the post",
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedPost,
    });
  });
};

exports.updatePost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with updating",
      });
    }

    //updation code
    let post = req.post;
    post = _.extend(post, fields);

    //save to the DB
    post.save((err, post) => {
      if (err) {
        res.status(400).json({
          error: "Updation of post failed",
        });
      }
      res.json(post);
    });
  });
};

exports.updatePostLikeNComment = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  const postLikeOld = req.post;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with updating",
      });
    }
    let postLike = req.post;

    if (postLikeOld.likes?.includes(fields.likes)) {
      postLike
        .updateOne({
          $pull: {
            likes: fields.likes,
          },
        })
        .exec((err, post) => {
          if (err) {
            res.status(400).json({
              error: "Updation of post failed",
            });
          }
          res.json(post);
        });
    } else if (fields.comment) {
      postLike
        .updateOne({
          $push: {
            comments: {
              comment: fields.comment,
              commentAuthor: fields.user,
            },
          },
        })
        .exec((err, post) => {
          if (err) {
            res.status(400).json({
              error: "Updation of post failed",
            });
          }
          res.json(post);
        });
    } else {
      postLike
        .updateOne({
          $addToSet: {
            likes: fields.likes ? fields.likes : postLikeOld.likes,
          },
        })
        .exec((err, post) => {
          if (err) {
            res.status(400).json({
              error: "Updation of post failed",
            });
          }
          res.json(post);
        });
    }
  });
};

exports.getAllPosts = (req, res) => {
  Post.find()
    .select("-photo")
    .populate("postAuthor comments.commentAuthor")
    .exec((err, posts) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "NO post FOUND",
        });
      }
      res.json(posts);
    });
};

// middleware
exports.photo = (req, res, next) => {
  if (req.post.photo.data) {
    res.set("Content-Type", req.post.photo.contentType);
    return res.send(req.post.photo.data);
  }
  next();
};
