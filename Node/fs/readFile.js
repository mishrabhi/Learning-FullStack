const path = require('path');
const fs = require('fs/promises');

let historyPath = path.join(__dirname, '../../Browser_js/BOM/history.js');
console.log(historyPath);


//Synchronous:
// let data = fs.readFileSync(historyPath, 'utf8');

// console.log(data);


// Asynchronous:
// fs.readFile(historyPath, 'utf8', (err,data) => {
//     if(err){
//         console.log('logged error', err)
//     } else {
//         console.log('logging the data', data)
//     }
// })


// Promise:

// fs.readFile(historyPath, 'utf8').then(dt => {
//     console.log(dt)
// }).catch(err => console.log(err));


async function rf(){
    try {
        let dt = await fs.readFile(historyPath, 'utf8')
        return dt
    } catch (error) {
        
    }
}