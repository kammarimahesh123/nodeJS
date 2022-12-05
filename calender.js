var calendar=require('node-calendar');
 const {Calendar}=require("node-calendar-js");

 const Calendar1=new Calendar({
    year:2022,
    month: 11
 });

 console.log(Calendar1.toString());
 console.log(Calendar1.monthName);
 //console.log(Calendar1.console);
 

// console.log(calendar.isleap(2004));//it checks whether the year is a leap year or not

// console.log(calendar.leapdays(1990,2050));///it gives number of leap days between the given years

// console.log(calendar.monthrange(2022,12))///it gives number of days in a month and from which weekday the month starts

// //console.log(calendar.setlocale)

// console.log(calendar.day_name)
// ///calendar.weekday(year,month,day)
// console.log(calendar.weekday(2022,11,30))// it returns weekday of the respective date
// ////iterate through all the weekdays starting from the given(2) weekday eg: 2,3,4,5,6,0,1
// var cal=new calendar.Calendar(2).iterweekdays();
// console.log(cal);

// var cal1=new calendar.Calendar(6).itermonthdates(2022,11);
// console.log((cal1));

// var cal2=new calendar.Calendar(6).itermonthdays(2022,2)
// console.log(cal2);

// var cal3=new calendar.Calendar(2).itermonthdays2(2022,11)
// console.log(cal3)

// var cal4=new calendar.Calendar().monthdatescalendar(2022,11)

// console.log(cal4);