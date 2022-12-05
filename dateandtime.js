
const date=require('date-and-time');

///formatting date and time objects (Date--> string)

const now= new Date();

console.log(date.format(now,'MM/YYYY/DD,  HH:mm:ss'));

console.log(date.format(now, 'ddd, MMM DD YYYY '))

console.log(date.format(now, 'HH:mm A [GMT]Z'));

////creating a pattern

const pattern=date.compile('dddd,  DD MMM YYYY')

console.log(date.format(now,pattern));

///// parse: parsing date and time strings (String-->date)

console.log(date.parse('2012/12/20 23:14:05', 'YYYY/MM/DD HH:mm:ss'));

console.log(date.parse('13:53:44', 'HH:mm:ss'));/////if we dont give date it will take default date i.e. Jan 1 1970

//////max date is dec 31 9999 and min date is jan 1 0001;-----parsable dates
console.log(date.parse('13:57:55 PM','hh:mm:ss A'))


///add years

console.log(date.addYears(now,1))/////added one year from now----> 2023-11-29

console.log(date.addMonths(now,5))////added five months from now -----> 2023-4-29
console.log(date.addMonths(now,2))
console.log(date.addDays(now,5))///added 5 days from now

console.log(date.locale())

const today= new Date(2022,12,29);

const yesterday=new Date(2022,01,29);

console.log(date.subtract(today,yesterday).toDays())