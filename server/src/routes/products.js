const express = require("express");
const addProduct = require("../controllers/products");

const router = express.Router();
router.post("/admin/products", addProduct);
router.get("/admin/products",addProduct)

module.exports = router;