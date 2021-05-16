const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  password: String,
})

const Party = mongoose.model("Party", partySchema);

module.exports = Party;