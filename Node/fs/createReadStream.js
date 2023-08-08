const path = require('path');
const fs = require('fs');
const historyPath = path.join(__dirname, '../../Browser-JS/BOM/history.js');

let rdStream = fs.createReadStream(historyPath);

rdStream.setEncoding('utf8');

let dt = ''
rdStream.on('data', function(chunk) {
    console.log(chunk)
    dt += chunk
});

rdStream.on('end', function () {
    console.log('Reading complete')
})

rdStream.on('error', function(err){
    console.log('Something went wrong', err)
});