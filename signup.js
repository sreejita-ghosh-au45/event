const mongoose = require("mongoose");

//schema for SignUp -----

const signup = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const signupModel = mongoose.model("signup", signup);
module.exports = signupModel;
