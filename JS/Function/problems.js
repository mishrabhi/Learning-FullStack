//Write a function to check whether the number is odd or even?

function oddOrEven(a) {
    if (a % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log(oddOrEven(4));

// 2. Write a Program to print odd number between 1 to 100

for (var i = 1; i <= 100; i += 2) {
    console.log(i);
    // if(i % 2 != 0) {
    //     console.log(i)
    // }
}

// 3. WAP to print the table of 2
for (var i = 1; i <= 10; i++) {
    var table = "2 * " + i + " = " + 2 * i;

    console.log(`2 * ${i} = ${2 * i}`);
}
// Output:
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
// 2 * 10 = 20


// 4. Write a function to convert length converter function
function converter(m) {
    return m / 1000;
}
var result = converter(5000);
console.log(result);   //5


// 5. WAF to convert celcius to fahrenheit
function celciusToFahrenheit(n) {
    return n * 1.8 + 32;
}
var res = celciusToFahrenheit(50);
console.log(res);   //122


// 6.WAF to calculate the sum of elements in an array
function sum(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result = result + array[i];
        // result += array[i]
    }
    return result;
}
var array = [1, 4, 7, 9, 33, 55];
var result = sum(array);
console.log(result);    //109

// 7.WAF to remove spaces from the given string
var str = "This is Apple";
function remSpace(str) {
    var strArr = str.split(' ')
    console.log(strArr)
    return strArr.join('');
    // return str.split(' ').join('')
}

console.log(remSpace(str));      //ThisisApple


// 8.WAF which return boolean value when a number is divisible by 10
function divisibleBy10(n) {
    if (n % 10 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(divisibleBy10(25));    //false


// 9. Write a function to create new array:
//    if elements is even - multiply by 2
//    if elements are odd - multiply by 3

// 
function newArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i] * 2);
        } else {
            newArr.push(arr[i] * 3);
        }
    }
    return newArr;
}
console.log(newArray([1, 2, 3, 4, 5]));


// 10. WAF to return a factorial of a number.

function factorial(n) {
    var res = 1;
    if (n == 0 || n == 1) {
        return res;
    } else {
        for (var i = n; i >= 1; i--) {
            res = res * i;
        }
        return res;
    }
}
console.log(factorial(5));


// 11. WAF to print table from 2 to a given number.
function newtable(num) {
    for (var i = 2; i <= num; i++) {
        for (var j = 1; j <= 10; j++) {
            console.log(`${i} *  ${j} = ${i * j}`)
        }
    }
}
newtable(7);


// Callback AND Higher-Order Functions:

//12. Create a function 'addTwo' that accepts one input and adds 2 to it.

function addTwo(a) {
    return a + 2;
}
console.log(addTwo(2));  //4

//13. Create a function addS that accepts one input and adds an "s" to it.

function addS(a) {
    return a + 's';
}
console.log(addS('Abhi'));   //Abhis



//14. Create a function called map that takes two inputs:
//1.an array of numbers (a list of numbers)
//2.a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
//Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

function map(array, callback) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}
function multiplyByTwo(num) {
    return num * 2;
}
var numbers = [1, 2, 3, 4, 5];
var res = map(numbers, multiplyByTwo);
console.log(res);       // [2,4,6,8,10] 



//15. The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

function forEach(array, callback) {
    var alpahbet = [];

    for (var i = 0; i < array.length; i++) {
        alpahbet.push(callback(array[i]));
    }
    return alpahbet;
}
function letters(arr) {
    var newArr = arr.split(' ');
    return newArr.join('')
}
var arr = ['a', 'b', 'c'];
var res = forEach(arr, letters);
console.log(res);



//16. Create a function  in javascript with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
result = countBy(2, 5);
console.log(result);      // z = [2,4,6,8,10]



//17. Implement a function which convert the given boolean value into its string representation.

function booleanToString(b) {
    return b.toString();
}
result = booleanToString(true);
console.log(result);   // "true"



//18. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    return n * m
}

result = paperwork(5, 5);
console.log(result)    //25



//19. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
    return str.slice(1, -1);
}
let originalString = "Hello World"
removeChar(originalString);



//20. Make a simple function called greet that returns the most-famous "hello world!".

function greet() {
    return 'hello world!'
}

let greeting = greet();
console.log(greeting);   // 'hello world!



//21. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    if (bool == true) {
        return 'Yes'
    } else {
        return 'No'
    }
}

result =boolToWord(true);
console.log(result);


//22. Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(str){
    return str.replace(/\s/g, "");
  }
result = noSpace('Hello World')
console.log(result);    //HelloWorld





























