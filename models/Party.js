const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  prompt: {
    type: String,
    trim: true,
  },
  author: String,
  change: Boolean,
})

const Prompt = mongoose.model('Prompt', promptSchema);

module.exports = Prompt;