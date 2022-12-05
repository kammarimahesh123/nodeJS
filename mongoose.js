const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser')
const app=express();
const UserModel=require('schema.js')
const url="mongodb://127.0.0.1:27017/Vaishnav";
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});

mongoose.connection

.on('open',()=>
{
    console.log("Connected")
})
.once('error', ()=>
{
    console.log("not Connected");
});


//module.exports=app;

app.listen(4040,()=>{console.log("server started running at port 4040")})