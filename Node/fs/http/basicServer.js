const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    console.log(res);
    console.log(res.getHeaders());
    // res.statusCode = 200
    // res.end('Hello World')
    if(req.url == '/'){
        res.end('Welcome to my Page')
    }else if (req.url == '/books'){
        res.end("Lists of book I've read")
    } else {
        res.statusCode = 404;
        res.end('Page not Found')
    }
})

server.listen(3000, (err) => {
    console.log(err)
    console.log('Server up and running on Port 3000')
});