const fs = require('fs');

let writerStream = fs.createWriteStream(__dirname+'/output.txt', {encoding:'utf8'});

let readStream = fs.createReadStream(__dirname+'/input.txt');

readStream.pipe(writerStream);

console.log('Program Ends');