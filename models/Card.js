const mongoose = require('mongoose');

const partyNameSchema = new mongoose.Schema({
  partyName: {
    type: String,
    trim: true,
  },
  password: String,
})

const PartyName = mongoose.model('PartyName', partyNameSchema);

module.exports = PartyName;