// this keyword pointd to current object

console.log(global)
var cost = 12;

console.log(this.cost);    //undefined

function foo() {
    this.name = 'hh'
    console.log('from function', this);
}

//function call points to global object
foo();


var obj = {
    name : 'hiii',
    test : function(){
        console.log(this)
    }
}



//method call
obj.test();     //{ name: 'hiii', test: [Function: test] }

