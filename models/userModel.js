const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: string,
  },
  password: {
    require: true,
    type: string,
  },
  confirmPassword: {
    require: true,
    type: string,
  },
});

module.exports = mongoose.model("Users", userSchema);
