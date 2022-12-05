var express=require('express');

var jwt=require('jsonwebtoken');

const app=express();


app.get('/api',(req,res)=>{
    res.json("Hey there..Welcome to this API services")
});

app.post('/api/login', (req,res)=>{

    const user=
    {
        id: 2,
        username: "veeresh",
        email:"kammarimahesh1@gmail.com"
    };
    jwt.sign({user:user},"secret key",(err,token)=>{
        res.json({token});
    });
});


function verifyToken(req,res,next)
{
    var bearerHeader=req.headers["authorization"];


    if(typeof(bearerHeader)!=='undefined')
    {
        const bearerToken=bearerHeader.split(' ')[1];
        
        req.token=bearerToken;
        next();
    }else{
        res.sendStatus(403)
    }

};


app.post('/api/posts',verifyToken,(req,res)=>{

    jwt.verify(req.token,'secret key',(err,authData)=>{
     if(err){res.sendStatus(403)}
     else
     res.json({message:'successfully verified',authData});   
    });


});

app.listen(4040,()=>{console.log("server started running at port 4040")});