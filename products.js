const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productsController");

router.get("/categories/:categoryname/products", getProducts);
router.get("/categories/:categoryname/products/:productid", getProductById);

module.exports = router;
