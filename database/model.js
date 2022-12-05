const express=require('express');
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    id:Number,
    name: String,
    email: String,
    phno: Number

    });

    const users=mongoose.model("users",userSchema)

    module.exports=users;