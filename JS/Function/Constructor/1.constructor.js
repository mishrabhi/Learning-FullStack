// constructor function

function Person(name,age) {
    this.age = age;
    this.name = name;
    this.desc = function() { 
        return `I am ${this.name} and my age is ${this.age}`
    }
}

Person('raja', 24);
console.log(age);    //24

//Creating objects
var person1 = new Person('Ashu', 28);
var person2 = new Person('Chanchal', 23);

//accessing properties
console.log(person1.name);   //Ashu
console.log(person2.age);     //23

console.log(person1.desc());   //I am Ashu and my age is 28

console.log(Person.constructor);    // [Function: Function]


