const { Router } = require("express");
const express =  require("express");
const { postSignup, getsignupuser } = require("../controllers/signup");
const authRouter = express.Router();



authRouter.get("/signup",getsignupuser);
authRouter.post("/signup",postSignup);
// authRouter.post("/login",loginController);

module.exports = authRouter;
