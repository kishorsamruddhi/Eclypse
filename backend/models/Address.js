const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  apt: String,
  state: String,
  zip: String,
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
