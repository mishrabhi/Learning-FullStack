# Arrays:

* Array() is a built-in function that you can use as a constructor to create arrays:
```
var a = new Array();
```
This is equivalent to the array literal notation:
```
var a = [];
```

* No matter how the array is created, you can add elements to it as usual.

* Arrays are objects, but of a special type because:
1. The names of their properties are automatically assigned using numbers starting from 0.

2. They have a length property that contains the number of elements in the array.

3. They have more built-in methods in addition to those inherited from the parent object.


## Array-Methods:

###  Push and Pop:

* The push() method appends a new element to the end of the array. The pop() method removes
the last element.


### Sort:
* The sort() method sorts the array and returns it.

### Join:
* The join() method returns a string containing the values of all the elements in the array glued
together using the string parameter passed to join():
```
a = [1,3,5,7,test];
a.join(' is not ');
"1 is not 3 is not 5 is not 7 is not test"
```

### Slice():

* The slice() method returns a piece of the array without modifying the source array. The first
parameter to slice() is the start index (zero-based), and the second is the end index (both
indices are zero-based). Start index is included, while the end index is not.


## Advance Methods:-

### For Each():

* The forEach Javascript array method is used to iterate through an array and then it runs a callback function on each value on the array and then it returns undefined.
* The forEach method always returns undefined, so if you try to return a value from a forEach method, you will get undefined.

### map():

* The map array method when invoked on an array creates a brand new array. 
* It iterates through the array and runs a callback function on each value or element in the array and returns the new array.
* It accepts three optional parameters and one non-optional parameter which represents the current element that is to be transformed in the array.

* The callback can accept three parameters:

    > The value of the element

    > The index of the element

    > The original array

* You do not need to pass in all three parameters, only pass in the ones you need.

### Filter():

* The filter method is an iteration method on Arrays in JavaScript that accepts a callback as its first parameter, the callback is run on each value in the array and creates a new array from the array it is invoked on and returns all the values that match the criteria passed to its callback function.

* The callback can accept three parameters:

    > The value of the element

    > The index of the element

    > The original array

* You do not need to pass in all three parameters, only pass in the ones you need.


### every():

* This method iterates through an array and checks if all the elements in the array pass the condition in the callback function of the array.

* The expression is evaluated to a Boolean.
```
const numbers = [-1, -2, 20, 40, 50];
number.every(num => num > 0)

o/p => false
```
* The returned value is false because all (every) of the items in the array are not greater than zero. It will only return true when the callback function returns true for all the items in the array.


### Reduce():

* The reduce method runs a callback function on each item in the array it is invoked.

* When you have an array of numbers and you want to add them up. Like in the case of an online shopping cart where you need to add all the amounts of products and return the total amount to the user.



 




