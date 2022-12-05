const express=require('express')

const UserModel=require('./model')

const app=express();

const bodyparser=require('body-parser')
app.get('/user',(req,res)=>{
    res.send("Ready to create a new user");
})
app.post('/add_user', async(req,res)=>{
    const user=new UserModel(req.body);
        try{
        await user.save();
        res.send(user);
    }catch(error){
        res.sendStatus(403,error)
    }

});

app.get('/users',async(req,res)=>{
    const users=await UserModel.find({})
    try{
        res.send(users)
    }catch{
        res.send("couldn't find")
    }
});
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
module.exports=app;