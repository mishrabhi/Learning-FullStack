// passing object
// Objects in JS are reference type, it means if assign a object to another variable it will point to same object, it won't create another object.

var obj1 = {
    name : 'abhi',
    age : 24
}

var obj2 = obj1;

obj2.name = 'shivangi';

// console.log(obj1.name);   //shivangi

// console.log(obj2.name);   //shivangi



// Object.assign();
// If dont want to reference the same object use Object.assign() method to create duplicate object

var a = {};
Object.assign(a,obj1);

console.log(a);      //{ name: 'shivangi', age: 24 }


a.name = 'Raja';
console.log(a)       //{ name: 'Raja', age: 24 }

console.log(obj1);    // { name: 'shivangi', age: 24 }


Object.assign(a, {name: 'oscar'});
console.log(a)    //{ name: 'oscar', age: 24 }


//Comparision
// When you try to compare two diffrent instances or objects using strict check will give you false;
// Beacuse it wont compare the properties and values, lets see:

var ob1 = {
    val1 :'object1',
    val2 : 12
}

var ob2 = {
    val1 :'object1',
    val2 : 12
}

console.log(ob1 === ob2);    //false

// But if you check 2 objects pointing to single instance/object will give you true, lets see this too:

var ob3 = ob2;

console.log(ob3 === ob2);   //true


// One easy way to compare two diffrent objects is by converting them into JSON

console.log(JSON.stringify(ob1) === JSON.stringify(ob2));    //true




