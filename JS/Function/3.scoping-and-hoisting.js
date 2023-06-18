// Scope of Variables
// Variables in JS are not defined in vlock scope, but in function scope, that means if a variable is defined inside a function, its not visible outside of the function

// The code inside a function has access to all global variables

var globalVar = 'Hello I am avaialble to everyone';
var discount = 10;
function test() {
    var localVar = 'I am available only to this function';
    console.log(globalVar);     // Hello I am avaialble to everyone
    console.log(localVar);     //   I am available only to this function
}
test(); 

//try to access these variable outside the function

console.log(globalVar);  // Hello I am avaialble to everyone
// console.log(localVar);   //ReferenceError: localVar is not defined


function mul(a,b) {
    var t= 20;
    return c= a*b*t;
}
mul(2,3);
console.log(c)   //120


// Note => If you dont use var to declare a variable,this variable is automatically assigned to the global scope.
// Test it by declaring a variable inside a function without using var

function test() {
    cost = 20;
    return cost;
}
test();
console.log(cost);   //20



// Varibale Hoisting:

// When your JS program execution enters a new function, all the variables "declared" anywhere in the function are moved, elevated or hoisted at top of the function.

//Only the declaration is hoisted, meaning only the resence of variable is moved at the top.

// In ES6, variables declared by the let keyword are hoisted to block scope. However, referencing the variable before its declaration is an error.

// Below unexpected behaviour is because of hoisting:

var a = 23;
function f() {
    console.log(a);    //undefined
    var a = 1;
    console.log(a);    //1
}
f();





