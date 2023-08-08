// let history = require('../../Browser-JS/BOM/history')

//What if I need full path of file

const path = require('path');
console.log(__dirname);        //C:\Programming\Learning-FullStack\Node\fs


const history = path.join(__dirname, '../../Browser-JS/BOM/history');

console.log(history);       //C:\Programming\Learning-FullStack\Browser-JS\BOM\history
