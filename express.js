
const express=require('express');

var app=express();

const port=4545;

const cars=[
    {brand:"skoda",
     model:"rapid", 
     price:'$45000' 
    },
    {brand:"VW",
     model:"Vento",
     price:'$65000'
     },
    {brand:"TATA", 
    model:"Altroz", 
    price:'$60000' 
    },
    {brand:"Maruti", 
    model:"suzuki", 
    price:'$75000' 
    }]

app.get('/', (req,res)=>{
    res.send("Welcome to Archents ")
});

app.get('/users/:id',(req,res)=>{
    res.send(`Today is the ${req.params.id}th day of the week`)
});

app.get('/cars',(req,res)=>{
    res.json(cars)
});

app.get('/cars/:id',(req,res)=>{
    res.json(cars[parseInt(req.params.id)-1])
})

app.listen(port, ()=>{
    console.log(`server running on port number ${port}`)
})