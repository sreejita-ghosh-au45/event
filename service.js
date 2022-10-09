const express= require("express")
const { getservicepage } = require("../controllers/service")

const serviceRouter=express.Router()

serviceRouter.get('/service',getservicepage)


module.exports=serviceRouter