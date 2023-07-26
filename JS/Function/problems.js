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
console.log(removeChar(originalString));    //ello Worl



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

result = boolToWord(true);
console.log(result);     //Yes


//22. Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(str) {
    return str.replace(/\s/g, "");
}
result = noSpace('Hello World')
console.log(result);    //HelloWorld


//23. Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
    var res = '';
    for (var i = 0; i < x.length; i++) {
        if (parseInt(x[i]) < 5) {
            res = res + '0';
        } else {
            res = res + '1';
        }
    }
    return res;
}
console.log(fakeBin('1739'));  //0101

//24. Given an array of integers as strings and numbers, return the sum of the array values as if all were number.

function sumMix(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + Number(arr[i]);
    }
    return sum;
}
var array = [1, 2, '3', '4', 5]
result = sumMix(array);
console.log(result);     //15


//25. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
    if (numbers.length == 0) {
        return 0;
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result = result + numbers[i]

    }
    return result;
};

var array = []
result = sum(array);
console.log(result);   //0


//26.Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum;
}
console.log(summation(4))    //10

//27.Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x) {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res = res * x[i];
    }
    return res;
}
console.log(grow([2, 3, 4]));    //24


//28. Given an array of integers, return a new array with each value doubled.

function maps(x) {
    let newarr = [];
    for (let i = 0; i < x.length; i++) {
        newarr.push(x[i] * 2);
    }
    return newarr;
}
console.log(maps([1, 2, 3, 4]));      //[2,4,6,8]



//29. You are given two interior angles (in degrees) of a triangle.

//Write a function to return the 3rd.

//Note: only positive integers will be tested. 

function otherAngle(a, b) {
    c = 180 - (a + b);
    return c;
}

console.log(otherAngle(70, 50));  //60


//30. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.
//Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
    if (l != w) {
        return perimeter = 2 * (l + w)
    } else {
        return area = l * w
    }
};

console.log(areaOrPerimeter(2, 4));     //12


//31. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//Example:
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isogram(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isogram("Dermatoglyphics"));    //true

//32. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
/**
 * Number Can be converted in str
 * Str can be splited in an array
 * Loop the array in reverse manner
 * Keep storing the values in new Array
 * 
 * 
 */





//33. Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//use filter



//34. Given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14

function opposite(number) {
    return number * -1;
}
console.log(opposite(3));    //-3


//35.Take an array of integers and sum all the integers
//Give your answer as a string matching "odd" or "even".

function oddOrEven(array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res = res + array[i]
    }
    if (res % 2 == 0) {
        return `even`
    } else {
        return 'odd'
    }
}
console.log(oddOrEven([3, 5, 7]));     //odd


//36. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
    return str.endsWith(ending);
}

console.log(solution('abc', 'bc'));   //true



//37. Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// function capital(str){
//     let arr = str.split(' ');
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         // let firstLetter = arr[i][0].toUpperCase();

//         let final = arr[i][0].toUpperCase()+arr[i].substr(1);
//         newArr.push(final)
//     }
//     return newArr.join(' ')
// };

// function capital(str){
//     return str.split(' ').map((ele) => ele[0].toUpperCase()+ele.substr(1)).join(' ')
// };

let capitalFirstChar = str => str.split(' ').map(ele => ele[0].toUpperCase() + ele.substr(1)).join(' ')
console.log(capitalFirstChar("How can mirrors be real if our eyes aren't real"))


//38. , you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 9 is 81 and 1 is 1. (81-1-1-81)





//39. Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        return true;
    } else {
        return false;
    }
}
console.log(isTriangle(3, 4, 5));   //true


//40. Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    let century = Math.ceil(year / 100);
    return century;
}
console.log(century(1900));    //19


//41. Given an integral number, determine if it's a square number:
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true

var isSquare = function (n) {
    let squareRoot = Math.sqrt(n);
    if (Number.isInteger(squareRoot)) {
        return true;
    } else {
        return false;
    }
}


//42. Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//The binary number returned should be a string.

function addBinary(a, b) {
    let sum = a + b;
    return sum.toString(2);
}
console.log(addBinary(2, 4));    //110


//43. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//Note: a and b are not ordered!

function getSum(a, b) {
    if (a == b) {
        return a;
    }

    let start = Math.min(a, b);
    let end = Math.max(a, b);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;

}
console.log(getSum(2, 5));     //14



//44.ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false









//45.  We need a function that can transform a number (integer) into a string.
function numberToString(num) {
    return num.toString();
}
console.log(numberToString(25))     //"25"



//46. Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true





//47. Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return NaN;
    }
}
console.log(basicOp('+', 3, 8));    //11



//48. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"

function repeatStr(n, s) {
    if (n <= 0) {
        return "";
    }

    let repeatedString = "";
    for (let i = 0; i < n; i++) {
        repeatedString += s;
    }
    return repeatedString;
}
console.log(repeatStr(4, 'hello'));     //hellohellohellohello



//49. Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel('hello I am Abhishek'));   //hll  m bhshk


//50. Write a function named setAlarm. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false

function setAlarm(employed, vacation) {
    return employed && !vacation;
}
console.log(setAlarm('true', 'true'));   //false


//51. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}
console.log(doubleChar('hello'));       //hheelllloo


//52. Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.




//53. Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
    const binaryString = arr.join('');
    const decimalVal = parseInt(binaryString, 2);
    return decimalVal;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));      //1


//54. Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
    let arrayOfWords = string.split(' ');

    return arrayOfWords;
}


//55. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    const wordLength = s.length;
    const middleIndex = Math.floor(wordLength / 2);
    if (wordLength % 2 == 0) {
        return s.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return s.charAt(middleIndex)
    }
}

























































