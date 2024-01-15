const  mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   name: {type:String,unique:true,required:true}, // String is shorthand for {type: String}
   email:String,
   password: String,
  
});
const User = mongoose.model('User',userSchema);
module.exports = User