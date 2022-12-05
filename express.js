const express=require('express')

var app=express();

app.get('/', (req,res)=>{
    
    res.send('<a href="/Contacts"> Contact Us </a> <br> <a href="/About"> About Us </a>');
});
app.get('/Contacts', (req,res)=>{
    res.send('<h1>Contact us page</h1>');
});
app.get('/About', (req,res)=>{
    res.send('<h1> About us page </h1>');
})
app.get('*', (req,res)=>{
    res.send('404: No page found. <a href="/"> Go to Home page </a>' );
})
app.listen(4000, ()=>{
    console.log("server started on port number 4000")
});