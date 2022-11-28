// var i=0;
// console.log(i)
// setInterval(function()
// {
//     i++;
//     console.log(i+"welcome to archents")
// },1000);

// var recursive=function()
// {
//     console.log("Welcome to Archents");
// }
// var greet=function()
// {
//     console.log("Hello World")
// }
// var id1=setTimeout(greet,1000);
// var id2=setInterval(recursive,2000)
// clearTimeout(id1)

//recursive();
const os=require('os');
const net=require('net');
const { Server } = require('http');
console.log(os.arch())
console.log(os.uptime());
console.log(os.platform());
//console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.type());
console.log(os.totalmem());
console.log(os.release());
var address=Server.address();
console.log(address)
