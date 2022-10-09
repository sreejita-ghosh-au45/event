const express= require("express")
const { getLoginPage, postLoginPage } = require("../controllers/login")
const { getPaymentus, postPaymentModel } = require("../controllers/payment")
const { getContactus, postContactModel, getHome } = require("../controllers/user")
const userRouter=express.Router()

userRouter.get('/contactus',getContactus)

userRouter.post('/contactus',postContactModel)

userRouter.get('/payment',getPaymentus)

userRouter.post('/payment',postPaymentModel)
userRouter.get('/home',getHome)
userRouter.get('/login',getLoginPage)
userRouter.post('/login',postLoginPage)

module.exports=userRouter