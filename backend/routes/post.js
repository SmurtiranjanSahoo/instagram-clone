const express = require("express");
const router = express.Router();

const { getPostById } = require("../controllers/post");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("postId", getPostById);

module.exports = router;
