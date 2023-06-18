// to define a constant value - use const to declare a variable

const PI = 3.14
console.log(PI);    //3.14

//PI = 3.141;
//console.log(PI);   //Assignment Error

const mySelf = {
    name: 'Abhishek',
    gender: 'Male'
};

mySelf.name = 'Ashu';
console.log(mySelf);    //{ name: 'Ashu', gender: 'Male' }     
//Note: No error because we aren't modifying its lacation instead we r modifying its inner value

const b = {
    age : 23
};

// mySelf = b;   //this is an error because we are assigning another reference


const arr = [2,3,4,5]
arr.push(4);
console.log(arr);     //[ 2, 3, 4, 5, 4 ]


// arr = [7,8,9];
// console.log(arr);      //TypeError: Assignment to constant variable.


//Let - used to declare variable at block level

let a = 20;
if(true) {
    var c = 20;
    let d = 'this is let'
}

console.log(c)    //20
console.log(a)    //20
// console.log(d)    //ReferenceError: d is not defined


//Hoisting behavior gets changed with let keyword
let m = 20;

function foo() {
    let m;
    console.log(m);     //undefined
    m = 30;
    console.log(m);    //30
}

foo();









