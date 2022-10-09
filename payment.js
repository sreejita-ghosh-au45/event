const mongoose=require("mongoose")

const PaymentModel=require("../paymodel/user")
//getting file in server

const getPaymentus=(req,res) =>{
    res.sendFile("C:/Users/User/Desktop/event managment/publics/payment.html")
}


const postPaymentModel = async(req,res)=>{
    const Data = req.body
    // console.log(Data)
    try{
       const details=await PaymentModel.create(Data)
       console.log(details)
        res.send({status:"success",details})
    }
    catch(err){
        // console.log("error")
        res.send({status:"error in sendin to db"})
    }
}
module.exports={postPaymentModel,getPaymentus}