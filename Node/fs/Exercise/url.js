
const url = require('url');

let uri = 'https://localhost:3000/?name=abhi';

let parsedURL = url.parse(uri,true);

console.log(parsedURL);



