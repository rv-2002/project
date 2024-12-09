var express=require('express')

var hbs=require('hbs')
var path=require('path');
var body=require('body-parser')
var app=express();
var mongo=require('mongoose')
var admin=require('./roter/route');
app.use(body.urlencoded({extended:true}));
app.use(body.json());
var path=require('path');
mongo.connect('mongodb+srv://raguvaranraguvaran020:raguragu@cluster0.aa4ub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test')
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs')
app.use(admin);
app.listen(4000,(req,res)=>
{
    console.log("connect!!");
    
})
