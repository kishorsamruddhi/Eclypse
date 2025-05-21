const express = require("express");
const Product = require("../models/Product.js");

const router = express.Router();

// GET /api/products - Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
