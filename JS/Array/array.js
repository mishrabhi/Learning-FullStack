
//Array

var a = [1, 2, 3];
console.log(a)  // [ 1, 2, 3 ]

console.log(a[0]);  // 1

console.log(a[5]);  //undefined


//adding element

a[3] = 'tree';
console.log(a);   // [ 1, 2, 3, 'tree' ]

a[6] = 'new';
console.log(a);  // [ 1, 2, 3, 'tree', <2 empty items>, 'new' ]


//deleting

var b = [1, 2, 3];

delete b[1];

console.log(b);   // [ 1, <1 empty item>, 3 ]


// you can assign any data types in an array including other array:

var arr =  [1, "two", false, null, undefined];
console.log(arr);   // [ 1, 'two', false, null, undefined ]



// length:
console.log(a.length);   //7


//tostring():
// converts an array to a string of (comma separated) array values

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());   // Banana,Orange,Apple,Mango


// push:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push('kiwi');
console.log(fruits);  // [ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]


//pop:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());   // Mango

















