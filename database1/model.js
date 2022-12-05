const express=require('express');
const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    _id:Number,
    name: String,
    size: String,
    price: Number,
    quantity:Number,
    date: String
    });

    const foodOrders=mongoose.model("foodOrders",orderSchema)

    module.exports=foodOrders;