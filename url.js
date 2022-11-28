
var url=require('url')

var addr="http://localhost:3000/newFile.txt?year=2022&month=Nov";

var q=url.parse(addr,true)

console.log(q.host);
console.log(q.pathname);
console.log(q.search)
console.log(q.query)
var que=q.query;
console.log(que.month)
console.log(q.protocol)