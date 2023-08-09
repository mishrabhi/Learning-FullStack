const http = require('http');
const url = require('url')

let server = http.createServer();

server.on('request', function(req, res) {
    let parsedURL = url.parse(req.url,true);
    if(parsedURL.pathname == '/') {
        const n = parsedURL.query.name
        console.log(req.url);
        res.end(`HEllo ${n}`);
    }else {
        res.statusCode = '404';
        res.end('Page Not Found')
    }
    
    
    
})
server.listen(3000,() => console.log('Server up and running')); 



