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
    // if(i %2 == 0) {
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

console.log(remSpace(str));


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
            newArr.push(arr[i]*3);
        }
    }
    return newArr;
}
console.log(newArray([1, 2, 3, 4, 5]));


// 10. WAF to return a factorial of a number.

function factorial(n){
    var res = 1;
    if(n == 0 || n == 1){
        return res;
    } else {
        for(var i = n; i >= 1; i--){
            res = res * i;
        }
        return res;
    }
}
console.log(factorial(5));


// 11. WAF to print table from 2 to a given number.
function newtable(num) {
    for(var i = 2; i <= num; i++) {
        for(var j = 1; j <= 10; j++){
            console.log(`${i} *  ${j} = ${i*j}`) 
        }       
    }  
}
newtable(7);












