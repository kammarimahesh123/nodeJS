
var http=require('http')

var fs=require('fs')

fs.writeFile('newFile.txt','This is my text', function(err)
{
 if(err) throw err;
 console.log('File created')    
});
fs.appendFile('newFile.txt',"No i have already have a knowledge on creating files",(err)=>{
    if(err) throw err;
    console.log("file updated")
});
fs.writeFile('newFile.txt','This is my text....', function(err)
{
 if(err) throw err;
 console.log('content replaced')    
});
