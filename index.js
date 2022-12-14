const express  = require("express")
const app = express()
//const cookieParser  = require("cookie-parser")
const userRouter =require("../event managment/images/routes/user")
const {initDB} = require("./dbconfig")
const authRouter = require("./images/routes/auth")
const galleryRouter =require("./images/routes/gallery")
const aboutRouter = require("./images/routes/about")
const serviceRouter = require("./images/routes/service")


require("dotenv").config()
initDB()
app.listen(8000,()=>{console.log("server started at port 8000")})
//app.use(cookieParser())
app.use(express.static('publics'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use("/",navRouter)
//app.use("/",dietRouter)
app.use("/",userRouter)
app.use("/gallery",galleryRouter)
app.use("/users",authRouter)
app.use("/about",aboutRouter)
app.use("/service",aboutservice)

