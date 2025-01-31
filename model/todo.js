const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const todoModel = mongoose.model("TodoApp", todoSchema);
module.exports = todoModel;
