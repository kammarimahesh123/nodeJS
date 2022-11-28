
// import { createGzip } from 'zlib';

// const gzip=createGzip();

// import { createReadStream, createWriteStream } from 'fs';

// const inp=createReadStream('myFile.txt');

// const oup=createWriteStream('myFile.txt.gzip');

// inp.pipe(gzip).pipe(oup);


var d1=new Date('2/11/1987')

var d2=new Date('3/12/1999')
 console.log(d1.getTime())
var diff_time=d2.getTime()-d1.getTime();

var days_diff=diff_time/(1000*60*60*24)
console.log(days_diff);
