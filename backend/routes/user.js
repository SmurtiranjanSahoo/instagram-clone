const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  getAllUsers,
  getUserbyUsername,
  updateUserProfilePhoto,
  photo,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.post(
  "/username/:userId",
  isSignedIn,
  isAuthenticated,
  getUserbyUsername
);
router.get("/users/:userId", isSignedIn, isAuthenticated, getAllUsers);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.put(
  "/userphoto/:userId",
  isSignedIn,
  isAuthenticated,
  updateUserProfilePhoto
);

router.get("/user/photo/:userId", photo);

module.exports = router;
