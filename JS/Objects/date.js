//Date() is a constructor function that creates date objects. You can create a new object by passing:
// Nothing (defaults to today's date)
// A date-like string
// Separate values for day, month, time, and so on A timestamp

console.log(new Date());      // 2023-06-05

console.log(new Date('2015 11 12'));

console.log(new Date('1 march 2016 5:30'));     //2016-03-01


// // a date object can be initialized with a timestamp (the number of milliseconds since the UNIX epoch, where 0 milliseconds is January 1, 1970):

console.log(new Date(1534474190471));    //2018-08-17

var timeStamp = new Date();

//to get new timeStamp
console.log(timeStamp.getTime());     //1685995971282
console.log(Date.now());   //gives current timeStamp

console.log(new Date(1685960022937));   //2023-06-05

var today = new Date();
console.log(today);
console.log(today.getDate())    //6(Today's Date)

// Month counting starts from 0
console.log(today.getMonth());     //5

console.log(today.getFullYear());    //2023

console.log(today.getMinutes());   //48




