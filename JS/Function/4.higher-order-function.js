// Higher Order Function is a function that does atleast one of the following:

//1. Takes one or more functions as arguments
//2. Returns a function as a result

// Inner(private) functions:

// Bearing in mind that a function is just like any other value, there's nothing that stops you from defining a function inside another function, here's the example:

function outer(param) {
    function inner(theinput) {
        return theinput * 2;
    }
    return  `The result is ` + inner(param);
}
console.log(outer(3));   //The result is 6



//Using function expression this can also be written as follows:

var outer = function(param) {
    var inner = function(theinput) {
        return theinput * 2;
    }
    return `The result is ${inner(param)}`
}
console.log(outer(3));  // The result is 6
// console.log(inner(2));  //ReferenceError: inner is not defined

// When you call the global outer() function, it will internally call the local inner() function. As inner() function is local, it's not accessible outside outer() function, so you can say it's a prive function.

// The benefits of using private functions are follows:

//1. You can keep the global namespace clean, which is less likely to cause naming collisions.
//2. Privacy: You can expose only thise functions to the outside world that you decide, and keep the functionality that is not meant to be consumed by the rest of the application to yourself


//Function that returns function

function out() {
    function inn() {
        return 'Hello';
    }
    return inn;
}

var res = out()();   // returning inner function
console.log(res);   // Hello


function first() {
    function second() {
        return 'Example';
    }
    return second;
}
var output = first()();
console.log(output);  // Example





