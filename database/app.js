const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
const schema=require('./model')
//app.use(schema);

const url="mongodb://127.0.0.1:27017/vaishnav";
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
const routes=require('./index')
app.use(routes);


app.listen(4040,()=>{console.log("server started running at port 4040")})