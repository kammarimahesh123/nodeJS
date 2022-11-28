

var fs=require('fs')

var events=require('events')

const eventEmitter=new events.EventEmitter();

eventEmitter.on('addition',(a,b)=>{
    console.log(`addition of two numbers is ${(a+b)}`)
    
});
eventEmitter.on('studentsData',()=>{
    console.log("Sttudents details are updated with these results");
});


eventEmitter.on('Subtraction',(a,b)=>{
    console.log("The subtraction of two numbers is" +(a-b));
    eventEmitter.emit('addition', 40,20);
    eventEmitter.emit('studentsData')
});
eventEmitter.emit('Subtraction', 50,30);
