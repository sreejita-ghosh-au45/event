const express= require("express")
const { getaboutpage } = require("../controllers/about")

const aboutRouter=express.Router()

galleryRouter.get('/about',getaboutpage)


module.exports=aboutRouter