//here "true" indicates timeslots generated with time
var ts=require('time-slots-generator');

var ts1=require('time-slot-generator');
// console.log("gives all time slots of the day")
// console.log(ts.getTimeSlots([],false));///gives all time slots of the day
// console.log("gives time slots of the day without given times")
// console.log(ts.getTimeSlots([[300,1080]],false))
// console.log("gives all time slots of the day with time")
// console.log((ts.getTimeSlots([],true)));
// console.log(("gives time slots of the day without the given times with time"));
// console.log((ts.getTimeSlots([[200,1080]],true)));
// console.log('gives all time slots of the day with interval half-an-hour');
// console.log(ts.getTimeSlots([],true,'half'));
var slots=ts1("10:30","11:30",2);
console.log(slots);