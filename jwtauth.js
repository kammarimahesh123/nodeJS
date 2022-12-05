var express=require('express');

var dotenv=require('dotenv')

const jwt=require('jsonwebtoken')

const app=express();

dotenv.config();

app.get('/api', (req,res)=>{
    res.send("My first API service")
});

app.post('/api/gentoken', (res,req)=>{
    let jwtSecretKey=process.env.JWT_SECRET_KEY;

    let user={
        id:12,
        email:"kammarimahesh1@gmail.com"
    };

    const token=jwt.sign(user,jwtSecretKey)
    
        res.send(token);

    

    
});


app.listen(4040,()=>{
    console.log("Serer started running at port 4040")
});