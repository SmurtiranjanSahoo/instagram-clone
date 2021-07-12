const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup } = require("../controllers/auth");

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

module.exports = router;
