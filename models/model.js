const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  todo: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
