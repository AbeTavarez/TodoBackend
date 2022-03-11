const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  textContent: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    date: Date.now,
  },
  completed: Boolean,
  default: false,
});

module.exports = mongoose.model("todo", todoSchema);
