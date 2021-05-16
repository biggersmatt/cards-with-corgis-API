const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  prompt: {
    type: String,
    trim: true,
  },
  author: String,
  discard: Boolean,
})

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;