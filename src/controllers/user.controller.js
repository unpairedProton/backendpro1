import asyncHandlerP from "../utils/asyncHandlerP.js";

const registerUser = asyncHandlerP(async (req,res)=>{
    res.status(200).json({
        message:"chai or code"
    })
})

export default registerUser