const User = require('../model/userModel');  
const jwt = require('jsonwebtoken');
const validator = require('email-validator');

const signin = async (req,res)=>{
    let {email,password} = req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                msg:"email doesnot exist"
            })
        }
        user.comparePassword(password, (err,match)=>{
            if(!match || err) return res.status(400).json({
                msg:"password does not match"
            })
            let token = jwt.sign({_id:user._id},'gffsdydhgkldvnjkmfklfdb',{expiresIn:'24h'});
            res.status(200).json({
                token,
                username:user.username,
                email:user.email,
                id:user._id,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,

            })
        })
    } catch(error){
        return res.status(400).json({
            msg:"login failed"
        })
    }
};

const register = async (req,res)=>{
    console.log(req.body,'req');
    const {email,password,username} = req.body;
    try{
        if(!username){
            return res.status(400).json({
                msg:"username is required"
            })
        }
        if(!email){
            return res.status(400).json({
                msg:"email is required"
            })
        }
        if(!validator.validate(email)){
            return res.status(400).json({
                msg:"enter valid email id"
            })
        }
        if(!password || password.length<6){
            return res.status(400).json({
                msg:"enter valid password"
            })
        }

        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({
                msg:"email is taken"
            })
        }
        const user = await new User({
            email,username,password
        })
        await user.save();
        return res.status(200).json({
            user
        })
    }
    catch(error){
        return res.status(400).json({
              msg:"Error creating user"
        })
    }
}

module.exports = {
    signin,
    register
}