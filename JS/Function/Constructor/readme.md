# Constructor Function:

* The Function() constructor creates Function objects.
* The Function constructor creates *functions* which execute in the global scope only.

* The constructor function name should start with the capital letter.
```
function Person() {
}
```

* In JavaScript, a constructor function is used to create objects. For example:
``` // constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();
```


# Object Prototype:

* Prototypes are the mechanism by which JavaScript objects inherit features from one another.
* Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.

* When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

