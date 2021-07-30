const express = require("express");
const router = express.Router();

const {
  getPostById,
  createPost,
  getPost,
  photo,
  deletePost,
  updatePost,
  getAllPosts,
} = require("../controllers/post");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("postId", getPostById);

//Actual Routes
router.post("/post/create/:userId", isSignedIn, isAuthenticated, createPost);

router.get("/post/:postId", getPost);
router.get("/post/photo/:postId", photo);

router.delete("/post/:postId/:userId", isSignedIn, isAuthenticated, deletePost);
router.put("/post/:postId/:userId", isSignedIn, isAuthenticated, updatePost);

//listing all posts
router.get("/posts/:userId", isSignedIn, isAuthenticated, getAllPosts);

module.exports = router;
