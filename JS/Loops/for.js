// To perform a set of task until it breaks or conditon is true

var num = [10,20,34,55,13];
//WAP to create a new array multiple of 2

// for (initialisation; condition; afterthought)
// statement

var numBy2 = [];
for (var i = 0; i <= 4; i++){
    console.log(`Index is ${i} and value is ${num[i]*2}`);
    numBy2.push(num[i]*2);
}
console.log(numBy2);
// Output:
// Index is 0 and value is 20
// Index is 1 and value is 40
// Index is 2 and value is 68
// Index is 3 and value is 110
// Index is 4 and value is 26
// [ 20, 40, 68, 110, 26 ]


// WAP to reverse the array

var reverseNum = [];
for(var i = num.length-1; i>=0; i--){
    reverseNum.push(num[i])
}
console.log(reverseNum);   // [ 13, 55, 34, 20, 10 ]



//Infinite loop:

// var i = 0;
// for( ; i<num.length ; ){
//     console.log(num[i])
// }
//This will throw an infinite loop


//infinite loop

// for(; ; i++){
//     console.log("hello")
// }
// This will throw an infinite loop


// WAP to create a new array which will have only even number from given array

var arr = [10,13,7,8,60,66,53];
var evenNum = [];
for (i =0; i < arr.length-1; i++){
    if (arr[i] % 2 == 0)
    evenNum.push(arr[i]);
}
console.log(evenNum);   // [ 10, 8, 60, 66 ]

console.log(`Even numbers in the given array are ${evenNum}`);   // Even numbers in the given array are 10,8,60,66



// WAP to reverse characters of string 'AbhishekMishra'

 var str = 'AbhishekMishra';
 var revString = '';
 for(var i=str.length-1; i>=0; i--){
    revString = revString.concat(str[i]);
    // console.log(revString)

 }
console.log(revString);

// Remove duplicate words
var str = "Believe, whatever you feel good on, believe on it. Believe is good way of having self confidence on yourself."

// remove duplicate characters
var str2 = "Hello I am good person"

// Reverse an array without creating a new one

// WAP to find some of prime numbers b/w 1 to 1000

// WAP to generate first n fibonacci numbers

// WAP to sort an array




