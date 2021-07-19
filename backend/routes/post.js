const express = require("express");
const router = express.Router();

const { getPostById, createPost } = require("../controllers/post");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("postId", getPostById);

//Actual Routes
router.post("/post/create/:userId", isSignedIn, isAuthenticated, createPost);

module.exports = router;
