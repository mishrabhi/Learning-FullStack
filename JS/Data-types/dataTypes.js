
//String
var nam = 'Abhishek'
console.log(typeof nam)   //String

//Numbers
var a = 10;
console.log(typeof a)  // number

//Octal numbers:
var a = 0377
console.log(a)  //255

var b = 0522
console.log(b) //388

//Hexadecimal
var c = 0x22
console.log(c)  //34

//Binary
var d = 0b100   // it changes the binary number into decimal number
console.log(d)  //4


//Exponential literals:
// 1e1 (also written as 1e+1 or 1E1 or 1E+1) represents the number 1 with a 0 after it, or in other words, 10.

var e = 1e1
console.log(e)  //10

var f = 1e100
console.log(f)  // 1e+100


//Concatenation:

var s = 'web'+'site'
console.log(s)  //website


//Boolean

var z = true;
console.log(z)   //true
console.log(typeof z)   //Boolean

//Coercion:
// If you add a number and a string, the number is coerced to a string:
 var n = 10 + "abhi"
 console.log(n)   //10abhi
 console.log(typeof n)   //string


// If you add a Boolean and a string, the Boolean is coerced to a string.
var k = true + "str"
console.log(k)   //truestr
console.log(typeof k)   //string


//If you add a number and a Boolean, the Boolean is coerced to a number.
var m = 10 + true
console.log(m)  //11
console.log(typeof m)  //number


var f = ""
console.log(f)   //
console.log(typeof f)  //String
