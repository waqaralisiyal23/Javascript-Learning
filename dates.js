/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/
let d = new Date();
console.log(d);
d = new Date("2000-02-23");
console.log(d);
d = new Date("October 13, 2014 11:13:00");
console.log(d);
d = new Date(2000, 1, 23);      // month is 0-based
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());

/*
There are generally 3 types of JavaScript date input formats:

Type	    Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/

// ISO dates can be written without specifying the day (YYYY-MM)
d = new Date("2015-03");
console.log(d);

// ISO dates can be written without month and day (YYYY)
d = new Date("2015");
console.log(d);

// ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ)
d = new Date("2015-03-25T12:00:00Z");
console.log(d);

/*
Date and time is separated with a capital T.
UTC time is defined with a capital letter Z.
If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
*/
d = new Date("2015-03-25T12:00:00-06:30");
console.log(d);


// Long dates are most often written with a "MMM DD YYYY" syntax like this
d = new Date("Mar 25 2015");
console.log(d);

// Month and day can be in any order
d = new Date("25 Mar 2015");
console.log(d);

// And, month can be written in full (January), or abbreviated (Jan)
d = new Date("January 25 2015");
console.log(d);

// Commas are ignored. Names are case insensitive
d = new Date("JANUARY, 25, 2015");
console.log(d);

// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970
let msec = Date.parse("March 21, 2012");
console.log(msec);

// You can then use the number of milliseconds to convert it to a date object
d = new Date(msec);
console.log(d);

// Date Get Methods
const date = new Date();

console.log("=========================================");
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log("=========================================");

// Date Set Methods
date.setFullYear(2020);
date.setMonth(11);
date.setDate(25);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(0);
console.log(date);