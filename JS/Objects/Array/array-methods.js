// Array Objects have a 'length' property defined 
// Max length in JS is 2^32-1 == 4294967295 

var arr = [1,2,3];
console.log(arr.length);    //3

// You can always set the value of length property
// Setting it to a greater value than the current number of items in array makes room for additional elements.

arr.length = 5;
console.log(arr);   // [ 1, 2, 3, <2 empty items> ]

// Setting the length property to a lower value removes the trailing elements

arr.length = 2;
console.log(arr);   // [1, 2]


// push method appends new element to the end of the array.
arr.push(3);
console.log(arr);    // [1, 2, 3]

// pop method removes the last element.
arr.pop();
console.log(arr);     // [1, 2]


// sort method sorts the arrray and returns it but the sort is not stable.
// The default sort order is according to string unicode.
var unsorted = [4,2,9,11,3];
var sorted = unsorted.sort();
console.log(sorted);   //    [ 11, 2, 3, 4, 9 ]   
// Note: It is not stable with numbers having tenth place or more than that




// join method returns a string containing the values of all the elements.
var str = arr.join();
console.log(str);       // 1,2

str = arr.join('');
console.log(str);     //12

str = arr.join(' hi ');
console.log(str);     //1 hi 2



// Slice method returns a piece of array without modifying source array.
// First parameter to slice() is the start index, second is the end index.
// Start index is included , while the end is not.
var sl = [5,4,3,7,6,9]
var b = sl.slice(1,3);
console.log(b);      //[4 , 3]

var c = sl.slice(0,2);
console.log(c);       // [5 , 4]




// splice method modifies source array.
// It removes a slice , returns it, and optionally fills the gap with new elements
// The first 2 parameters define start index and length (number of elements) of the slice to be removed
// the other parameters pass the new values.
var sp = [10,20,30,40];
var d = sp.splice(1,2);
console.log(d);
console.log(sp);
var e = sp.splice(1,2,'a','b','c');

console.log(e);     //[20 , 30]
console.log(sp);        // [ 10, 'a', 'b', 'c', 40 ]


