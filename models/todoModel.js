const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  todo: {
    require: true,
    type: String,
  },
  completed: {
    require: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("Data", dataSchema);
