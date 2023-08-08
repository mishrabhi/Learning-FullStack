const http = require('http');
const fs = require('fs');

let server = http.createServer();

server.on('request', function(req, res) {
    // fs.readFile(__dirname+'/file.txt', 'utf8', function (err, data) {
    //     if(err){
    //         console.log(err)
    //     } else {
    //         res.end(data)
    //     }
    // })

    let readStream = fs.createReadStream(__dirname+'/file.txt');
    readStream.setEncoding('utf8');

    readStream.pipe(res)
})
server.listen(3200,() => console.log('Server up and running'));