// routes/addressRoutes.js
const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

// Save address
router.post("/", async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all addresses
router.get("/", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
