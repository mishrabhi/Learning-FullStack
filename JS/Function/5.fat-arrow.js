//Function Expression
var add = function(a,b) {
    var total = a+b;
    return total;
}


//Fat-Arrow:
var addition = (a , b) => {
    return a + b;
}

//or

var addition = (a,b) => a + b;
console.log(addition(2,4));   //6



//You can use this as well when there is only one argument

var square = a => a*a;
console.log(square(5));  //25

