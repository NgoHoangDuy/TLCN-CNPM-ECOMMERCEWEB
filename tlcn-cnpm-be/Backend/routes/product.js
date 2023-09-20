const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const {
  getProducts,
  newProduct,
  deleteProducts,
} = require("../controllers/productController");

router
  .route("/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getProducts);
router.route("/product/new").post(newProduct);
router.route("/product/delete/admin:id").delete(deleteProducts);
module.exports = router;
