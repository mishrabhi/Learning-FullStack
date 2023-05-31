// Functions are data
// means you can create a function and assign it to a variable.

var add = function (a,b) {
    return a*b;
}
console.log(add(3,2));   //6

var square = function (c) {
    return c*c;
}
console.log(square(5));  //25


// Anonymous function
// function expression without name is said to be anonymous function

// 1. Self Executing or Immediate Functions

(
    function () {
        console.log(`Hi, I'm self executing function`);
    }
) ();     //Hi, I'm self executing function

// You can pass arguments also to your anonymous function

(
    function (name) {
        console.log(`Hello ${name}`);
    }
) ('ashu');   // Hello ashu


// 2. Callbacks:

// As a function is just like any other data assigned to a variable , it can be defined, copied, and also passed as an argument to other function

function func1 () {
    return 1;
}

function func2 () {
    return 2;
}

function finalResult(a , b) {
    return a() + b();
}
console.log(finalResult(func1, func2));   //3

var res = finalResult(function(){return 3}, function(){return 3})
console.log(res);   //6