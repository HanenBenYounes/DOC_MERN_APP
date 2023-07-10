const userModel = require('../models/userModels')
const bcrypt = require ('bcryptjs')
//register callback
const registerController=async(req, res)=>{
    try{
        const exisitingUser = await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).send({message:'User Already exist', success:'false'})
        }
        const password = req.body.password
    }
    catch(error){
        console.log (error)
        res.status(500).send({success:false, message:`Register Controller ${error.message}`})
    }
}

const loginController=()=>{}


module.exports = {loginController, registerController};