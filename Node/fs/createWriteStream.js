const fs = require('fs');
let dt = 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships'

let writerStream = fs.createWriteStream(__dirname+'/input.txt', {encoding:'utf8'});

writerStream.write(dt);

writerStream.on('finish', function() {
    console.log('Done writing');
});

writerStream.on('error', function(err) {
    console.log('Error, err')
});