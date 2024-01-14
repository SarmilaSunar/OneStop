const mongoose = require('mongoose')
const connection = async() => {
    try{
           const res = await mongoose.connect('mongodb://127.0.0.1:27017/OneStop');
           if(res)console.log('connected to mongodb')
        }catch(err){
        console.log(err)
    }
}
module.exports = connection