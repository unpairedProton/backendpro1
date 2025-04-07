import asyncHandlerA from "../utils/asyncHandlerA copy";

const registerUser = asyncHandlerA(async (req,res)=>{
    res.status(200).json({
        message:"ok"
    })
})