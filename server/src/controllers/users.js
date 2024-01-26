const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const registerNewUser = async(req, res) => {

const existingName= await User.findOne({name:req.body.name})
//if user email already exist,return 403,else create User
if(existingName){
      return res.status(403).json({ 
      msg:"User already exist"
    })
   }else{
      const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
     req.body.password=hashPassword
      await User.create(req.body)
      res.json({ 
        msg:"registered successfully"
      })
    }
   }

   const loginUser = async (req, res) => {
   try{
       const user = await User.findOne({email:req.body.email})
      if(user){
        console.log(user)
      }else{
        res.status(401).json({
          msg:"Invalid credentials"
        })
      }
    } catch (err) {
      res.status(400).json({ msg: "Login failed" });
    }
  };
     
  
   module.exports = {registerNewUser,loginUser} 