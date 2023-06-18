
//Basically it converts the comma seprated values in an array

function add(...values) {
    console.log(values)      // [ 1, 2, 3, 4, 5, 6 ]
    console.log(Array.isArray(values))    //true
}
console.log(add(1,2,3,4,5,6));





// It converts the array into comma seprated values

let arr = [65,34,45,89,75];

//Ques. WAP to find the biggest num in given array;

let biggest = Math.max(...arr);
console.log(biggest);   //89