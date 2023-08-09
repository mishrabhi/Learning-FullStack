// Math is a little different from the other built-in global objects you have seen. It's not a function, and, therefore, cannot be used with new to create objects. Math is a built-in global object that provides a number of methods and properties for mathematical operations.

// The Math object's properties are constants, so you can't change their values. Their names are all in uppercase to emphasize the difference between them and a normal property.

// //The constant PI

console.log(Math.PI);   //3.141592653589793

// Square root of 2:
console.log(Math.SQRT2);  //1.4142135623730951

//Euler's constant:
console.log(Math.E);   //2.718281828459045

//Natural logarithm of 2:
console.log(Math.LN2);   //0.6931471805599453


//Some Methods:

//Generating random Number

//will return a number between O to 1
console.log(Math.random());    // 0.088558590903411

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}
console.log(getRandomArbitrary(1,100));     //31.70847609828015{Evrytime it gives different number}



//If you only need an integer, you can use one of the following rounding mathods:
//floor() to round down
//ceil() to round up
//round() to round to the nearest

console.log('Floor', Math.floor(1.25));    //Floor 1
console.log('Ceil', Math.ceil(5.79));      //Ceil 6
console.log('Round', Math.round(6.3));     // Round 6


// // The Math object also provides the ability to perform mathematical operations for which you don't have a designated operator. This means that you can raise to a power using pow(), find the square root using sqrt(), and perform all the trigonometric operations-sin(), cos(), atan(), and so on.

console.log(Math.pow(2,3));     //8

console.log(Math.sqrt(49));     //7


//Math.max()
// Return the largest of zero or more numbers

console.log(Math.max(2,4,8,1));    //8

// Math.min()
// Return the smallest of zero or more numbers

console.log(Math.min(4,3,9,5));    //3



