
var express=require('express');

var cookie=require('cookie-parser');

var app=express();

app.use(cookie());

app.get('/cookieset', (req,res)=>{

    res.cookie('cookie_name','cookie_value');
    res.cookie('company','archents');
    res.cookie('name','mahesh');
    res.status(403).send('cookie is set');
        
});
app.get('/cookieget',(req,res)=>{
    res.status(403).send(req.cookies)
});

app.listen(4040, ()=>{console.log("server started running at port 4040");})