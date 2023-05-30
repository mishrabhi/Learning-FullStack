//Function

//creating a function which takes 2 arguments and return the addition

function add(a,b){
    var res = a+b;
    return res;
}
var additionRes = add(10,12);  //arguments
console.log(additionRes);   //22
console.log(add(10,12));  //22

//if we pass only one argument then
console.log(add(10));      //b is undefined so the result is NaN

//if we pas more than 2 arguments
console.log(add(10,20,30))  // 30  => it will silently ignore the extra ones.

// create a  addition function if the argument passed is number then return addition and if not then return please pass 2 number

function addition(a,b){
    if(a && b && typeof a === 'number' && typeof b === 'number'){
        var res= a + b;
        return res;
    } else {
        return 'pass the 2 numbers'
    }
}
console.log(addition('1',2));   //pass the 2 numbers
console.log(addition(33,44));   //77

// Write a program where you haven't know how many arguments are there and their type. So if the arguments are numbers then write a function to add them and if they are not numbers return an error message.

function addParams() {
    var res = 0;
    for(var i = 0; i < arguments.length; i++){
        if (typeof arguments[i]=== 'number'){
            res += arguments[i];
        } else {
            return 'given arguments are not numbers'
        }
    }
    return res;
}
console.log(addParams(1,2,3,4,5));   //15
console.log(addParams(1,2,'3',4,5));   // given arguments are not numbers

