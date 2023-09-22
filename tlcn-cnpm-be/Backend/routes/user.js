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
  getUserProfile,
  updateProfile,
  getAllUser,
  getUserDetail,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);
router.route("/password/forgot").post(isAuthenticatedUser, forgotPassword);
router.route("/password/update").post(isAuthenticatedUser, updatePassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetail);

router
  .route("/admin/user/update/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser);
router
  .route("/admin/user/delete/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;
