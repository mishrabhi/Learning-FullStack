# Array

* What is an array? It's simply a list (a sequence) of values. Instead of using one variable to store one value, you can use one array variable to store any number of values as elements of the array.

* JavaScript arrays are resizable and can contain a mix of different data types.

* To define an array that has three elements, you can write the following line of code:

```
var a = [1, True, 'Apple'];
```

* To access an array element, you can specify the index of that element inside square brackets. So, a[0] gives you the first element of the array a, a[1] gives you the second, and so on.

## Adding/Updating Array Elements:

* Using the index, you can also update the values of the elements of the array. The next example updates the third element (index 2) and prints the contents of the new array, as follows:

``` 
a[3] = 'Four'
console.log(a)  // [1, True, 'Apple', 'Four']
```

* If you add a new element but leave a gap in the array, those elements in between don't exist and return the undefined value if accessed.
var a = [1, 2, 3];

```
a[6] = 'new';
console.log(a);

// [1, True, 'Apple', 'Four', undefined x 2, 'new']
```

## DeletingElements:

* To delete an element, you can use the delete operator. However, after the deletion, the length of the array does not change. In a sense, you may get a hole in the array:

```
var a = [1, 2, 3];

delete a[1];

console.log(a);  // [ 1, <1 empty item>, 3 ]
```


## Arrays of Arrays:

* Arrays can contain all types of values, including other arrays:
```
var b =  [1, "two", false, null, undefined];

console.log(b);   //[ 1, 'two', false, null, undefined ]
```

## Array Methods:

* Array length: The length property returns the length (size) of an array.

* Array toString(): The JavaScript method toString() converts an array to a string of (comma separated) array values.

* pop() : The pop() method removes the last element from an array.

* push(): The push() method adds a new element to an array (at the end).









