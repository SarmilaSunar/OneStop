const User = require('../models/user')
const registerNewUser = async(req, res) => {

const existingName= await User.findOne({name:req.body.name})
//if user email already exist,return 403,else create User
 if(existingUser){
    return res.status(403).json({
    msg:"User already exist"
  })
 }else{
    await User.create(req.body)
    res.json({
      msg:"registered successfully"
    })
  }
 }
   

 module.exports = {registerNewUser} 