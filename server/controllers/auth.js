const {connect}=require('getstream')
const bcrypt=require('bcrypt')
const streamChat =require('stream-chat')
const crypto =require('crypto')
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;
const login = (req,res) => {
    try {
        
        const {fullName,username,password,phoneNumber}=req.body
        const userId=crypto.randomBytes(16).toString('hex')
        const serverClient=connect(api_key,api_secret,app_id)

    } catch (error) {
        console.log(error)
        res.status(5000).json({message:error})
        
    }
};
const signup = (req,res) => {
    try {
        

    } catch (error) {
        console.log(error)
        res.status(5000).json({message:error})
        
    }
};


module.exports={signup,login}