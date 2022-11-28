
var http= require('http');
var url=require('url')
 var dt=require('./filefs');
http.createServer((req,res)=>
{
    //res.write(`The current date and time is ${dt.myDateTime()}`);
    res.writeHead(200,{'content-type':'text/html'});
    var q=url.parse(url.req,true).query;
    //console.log(queryObject);  
    var text=q.year+" "+q.month;
    
    res.end(text);

}).listen(3000,()=>{
    console.log("the server running on port 3000");
});
