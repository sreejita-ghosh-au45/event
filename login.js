const mongoose = require("mongoose");

//schema for login -----

const login = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  }
});
const loginModel = mongoose.model("login", login);
module.exports = loginModel;
