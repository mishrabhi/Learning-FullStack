// Object

// Object is parent of all JS objects, which means that every object you create inherits from it.
// To create a new empty object, you can use the literal notation or the object() constructor function.

//The following two lines are equivalent:
var o = {};

var ob = new Object();

//Function is Object
function foo(a,b) {
    return a+b;
}

console.log(foo.length);    //2
console.log(foo.constructor);    //[Function: Function]


// Another property of function is Prototype.
// The Prototype property is available to you as soon as you define the function.
//Its initial value is empty object.

console.log(foo.prototype);    //{}
console.log(typeof foo.prototype);    //object


//You can augment this empty object with properties and methods. They won't have any effect on the foo() function itself; they'll only be used if you call foo() as a constructor.

// Adding methods and properties using the prototype.

foo.prototype.name = 'I am in prototype object'



function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.whatAreYou = function(){
        return `I am ${this.color} ${this.name} `;
    }
}

Gadget.prototype.price = 1000;
Gadget.prototype.rating = 4;
Gadget.prototype.getInfo = function() {
    return `Rating is ${this.rating} and Price is ${this.price}`;
}

// Using the protitype's method and properties

// All the methods and properties you added to the prototype are available as soon as you create a new object using the constructor

var mobile = new Gadget('Iphone', 'Black');

console.log(mobile.color);   // Black
console.log(mobile.whatAreYou());  // I am Black Iphone

console.log(mobile.getInfo());   // Rating is 4 and Price is 1000


var lappy = new Gadget('Laptop', 'Green');
Gadget.prototype.ram = 24;
console.log(lappy);  
//Output:
// Gadget {
//     name: 'Laptop',
//     color: 'Green',
//     whatAreYou: [Function (anonymous)]
//   }


console.log(lappy.ram);    //24
console.log(mobile.ram);    //24


//In JS prototypes are live objects are passed by reference in JS, and therefore, the prototype is not copied with every new object instance.
// It means that you can modify the prototype at any time, and all the objects, even those created before modification, will see the changes.

// Even though the lappy object was created before the ram property was defined, the lappy object still has access to the new property.

// Own properties versus prototype properties.



// Now from here things will get a bit confusing:

// When you try to access a property of lappy, say, lappy.name, the Javascript engine looks through all the properties of the object searching for one called 'name' and if it finds it, it returns its value

console.log(lappy.name);  //Laptop

//What if you try to access the price property??
//The JS engine examines all of the properties of the lappy object and doesn't find the one called price. then, the script engine identifies the prototype of the constructor function used to create this object. If the property is found in the prototype object, the following property is used;

console.log(lappy.price);    //1000

//You can do the same to access the property directly. Every object has a constructor property, which is a reference to the function that created the object,look at the following code:

console.log(lappy.constructor === Gadget);   //true
console.log(lappy.constructor.prototype.price);  //1000
  
