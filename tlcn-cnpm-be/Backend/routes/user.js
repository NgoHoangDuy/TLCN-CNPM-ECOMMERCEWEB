const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  updatePassword,
  resetPassword,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);
router.route("/password/forgot").post(isAuthenticatedUser, forgotPassword);
router.route("/password/update").post(isAuthenticatedUser, updatePassword);
router.route("/password/reset/:token").put(resetPassword);
module.exports = router;
