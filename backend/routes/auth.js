const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup, signin } = require("../controllers/auth");

router.post(
  "/signup",
  check("name")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 chars long"),
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 chars long"),

  signup
);

router.post(
  "signin",
  check("email").isEmail().withMessage("email is required"),
  check("password").isLength({ min: 1 }).withMessage("password is required"),

  signin
);

module.exports = router;
