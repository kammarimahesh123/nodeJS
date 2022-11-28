
var crypto=require('crypto');

const secret ="abcdefg";

const hash=crypto.createHmac('sha256',"ijklmnop").update('welcome to archents').digest('hex')

console.log(hash);