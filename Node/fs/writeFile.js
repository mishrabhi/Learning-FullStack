const { isUtf8 } = require('buffer');
const fs = require('fs');

console.log('Program Starts');        //Program Starts

let dt = 'Bad programmers worry about the code. Good programmers worry about data structure and their relationships.';

//synchronous method:
fs.writeFileSync('./input.txt', dt, (err,data) => {
        if(err){
            console.log('logged error', err)
        } else {
            console.log('Write Success')
        }
    });


//Asynchronous:

// fs.writeFile('./input.txt', dt, 'utf8').then(dt => {
//     console.log('Write Success')
// }).catch(err => console.log(err));


//Async-Await:
async function wF(){
    try {
        await fs.writeFile('./input.txt',dt,'utf8');
        console.log('Write Success')
    } catch (error) {
        console.log(error);    
    }
}
wF();
console.log('Program Ends');


//appendFile()
//mkdir()
//createDir()
//removeDir()
//readDir()
//rename()
//rmdir()



