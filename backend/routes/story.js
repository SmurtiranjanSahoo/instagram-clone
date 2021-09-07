const express = require("express");
const router = express.Router();

const {
  getStoryById,
  createStory,
  getAllStories,
  getStory,
  deleteStory,
  photo,
} = require("../controllers/story");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("storyId", getStoryById);

//Actual Routes
router.post("/story/create/:userId", isSignedIn, isAuthenticated, createStory);

router.get("/story/:storyId", getStory);
router.get("/story/photo/:storyId", photo);

router.delete(
  "/story/:storyId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteStory
);

//listing all posts
router.get("/stories/:userId", isSignedIn, isAuthenticated, getAllStories);

module.exports = router;
