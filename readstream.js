
const { json } = require('express');
var fs=require('fs');

const reader=fs.createReadStream('myFile.txt');

reader.on('data',(x)=>{console.log(x.toString())})

reader.on(console.log(JSON.parse(data)))