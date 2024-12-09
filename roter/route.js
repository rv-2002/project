var express=require('express')
var route=express.Router();
var user=require('../modulation/mongoos');

route.post('/new',async(req,res)=>
{
    const data=await new user({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        pass:req.body.pass,
        mobile:req.body.mobile
    })
    data.save();
    return res.redirect('/views')
    
})

route.get('',async(req,res)=>
{
 res.render('home')   
})
route.get('/views',async(req,res)=>
    {
     const data=await user.find();
     res.render('views',{data})
    
    })

    route.get('/delete',async(req,res)=>
    {
        let did=req.query.did;
        await user.deleteOne({_id:did});
        return res.redirect('/views')
    })
    route.get('/edit',async(req,res)=>
    {
        let uid=req.query.uid;
        const data=await user.findById({_id:uid})
        res.render('edit',{data})
        
    })
    route.post('/update',async(req,res)=>
        {
           let uid=req.query.uid;
           await user.updateOne({_id:uid},{$set:{
             name:req.body.name,
             age:req.body.age,
             email:req.body.email,
             pass:req.body.pass,
             mobile:req.body.mobile
         }})
            return res.redirect('/views')
        })
   

module.exports=route;