// Advance Methods for Arrays

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Ques:  Give array of inventors ' first and last name '
// like ['Albert Einstein', 'Isaac Newton'...]

//Using for loop:
// var fullNames = [];
// for(var i = 0; i < inventors.length; i++) {
//     fullNames.push(`${inventors[i].first} ${inventors[i].last}`)
// }

// Using forEach:
// inventors.forEach(ele => fullNames.push(`${ele.first} ${ele.last}`))


//MAP Method:
//Used apply a function on every element in array
//A new Array is returned with the same length

// var fullNames = inventors.map((ele, i, arr) => {
//     return `${ele.first} ${ele.last}`
// })

var fullNames = inventors.map(ele => `${ele.first} ${ele.last}`)

console.log(fullNames);  
//0utput:
// [
//     'Albert Einstein',
//     'Isaac Newton',
//     'Galileo Galilei',
//     'Marie Curie',
//     'Johannes Kepler',
//     'Nicolaus Copernicus',
//     'Max Planck',
//     'Katherine Blodgett',
//     'Ada Lovelace',
//     'Sarah E. Goode',
//     'Lise Meitner',
//     'Hanna Hammarström'
//   ]
  



// Filter Method:
// Used to apply filter methodology on an array
// returns a new array and length mostly less than original array.

// Q. Filter the list of inventors for those who were born in the 1500's

// var fifteens = inventors.map(ele => {
//     if(ele.year >= 1500 && ele.year < 1600) {
//         return ele;
//     }
// })
// console.log(fifteens);     //It will return all the inventors saying undefined on the values on which condition is false

var fifteens = inventors.filter(ele => ele.year >=1500 && ele.year < 1600)
console.log(fifteens);

//OutPut:
// [
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
//   ]



// 3. Sort the inventors by birthdate, oldest to youngest.

// Sort method
// Accepts one optionally campare method
// Sorts values according to the returned value(negative, zero, positive )

var ordered = inventors.sort((a,b) => a.year > b.year ? -1 : 1);
console.log(ordered);

//Output:
// [
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
//   ]
  

//We can check the sort method by sorting an simple array:
// 



// Q. How many total years did all the inventors live?

// Reduce Method
// Used to apply a function to each element in the array to reduce the array to a single value

var totalYear = inventors.reduce(
    (total, inventor) => {
        return total + (inventor.passed - inventor.year)
    },
    0
);
console.log(totalYear);    //861




//Add a method to array which behaves like map:
//creating a method mymap which will acts like map method

Array.prototype.mymap = function(callback) {
    console.log('this', this)
    var newArr = []
    for(var i = 0; i< this.length; i++) {
        newArr.push(callback(this[i],i,this))
    }
    return newArr;
}
var mineFunc = inventors.mymap((ele, i, arr) => {
    return `${ele.first} ${ele.last}`
})
console.log(mineFunc);






  