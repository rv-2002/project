var mongo=require("mongoose")

var user=new mongo.Schema({
    name:String,
    age:String,
    email:String,
    pass:String,
    mobile:String
})
const usermodel=mongo.model('mini',user)
module.exports=usermodel;
