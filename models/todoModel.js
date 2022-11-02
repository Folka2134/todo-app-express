const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    require: true,
    type: String,
  },
  completed: {
    require: true,
    type: Boolean,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
