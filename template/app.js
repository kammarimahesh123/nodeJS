

var express=require('express');

//var path=require('path')

var app=express();



app.get('/userhobbie',(req,res)=>{

    let user={
        name:'mahesh',
        hobbies:['cricket','football','playing with vaishnav'] }

        res.render('index.ejs', {user:user});
    });
app.listen(4040,()=>{console.log('Server started running at port 4040');})