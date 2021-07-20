const express = require("express");
const router = express.Router();

const {
  getPostById,
  createPost,
  getPost,
  photo,
} = require("../controllers/post");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("postId", getPostById);

//Actual Routes
router.post("/post/create/:userId", isSignedIn, isAuthenticated, createPost);

router.get("/post/:postId/:userId", isSignedIn, isAuthenticated, getPost);
router.get("/post/photo/:postId/:userId", isSignedIn, isAuthenticated, photo);

module.exports = router;
