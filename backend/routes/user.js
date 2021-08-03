const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  getAllUsers,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/users/:userId", isSignedIn, isAuthenticated, getAllUsers);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

module.exports = router;
