const express= require("express")
const { getgallerypage } = require("../controllers/gallery")

const galleryRouter=express.Router()

galleryRouter.get('/images',getgallerypage)


module.exports=galleryRouter