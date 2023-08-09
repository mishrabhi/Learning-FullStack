// Requiring other modules 

// In order to import the module, we need to use special keyword used to import things, and it is called 'require'.

// Where module.exports lets us set things for export, require lets us specify modules to be imported into the current module.

// require available in the global scope.

// To import a defined in other file, we would require('relative path'), where we have specified the relative path.

// module.exports is returned by require().


//import syntax:
// import globalImport from './global';

const globalImport = require('./global')

// import { add } from './global'

console.log(globalImport.hello);

// let fromBasicModule = require("./global") //it returns exports object of that file

// console.log(fromBasicModule)

let squaredValue = globalImport.square(10)
console.log(squaredValue)

//importing single property

const square = require('./global').square

console.log(square(2));

