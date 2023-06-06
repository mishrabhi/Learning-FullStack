// Traditional way so called for loops

var a = [12,23,34,45,56,67,78,89,90]

for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}

// for in loop
// Used to iterate over the elements of an array or object
// This cannot be used for general-purpose repitition mechanism to replace for or while
// The values assigned to index is string 
// It was designed to work on plain old Objects
// So, don't use for array iteration

for(var ele in a){
    console.log(typeof ele);
    console.log('Iterating using for in '+a[ele]);
}


// The Mighty for-of loop

// avoids all pitfalls of for-in
// works with break,continue and return
// for-of loop is for looping over data, like values in an array

for(var value of a){
    console.log(value)
}



// forEach() method executes a provided function once for each element

var arr = [20,30,40,50];

// arr.forEach(<function>)
// It takes a callback function
// Callback will get passed with 3 values - element, index and whole array

arr.forEach(function(element, index, array) {
    console.log(`Element is ${element}, index is ${index} and array is ${array}`)
});

arr.forEach((ele,i,arr) => console.log(ele))


