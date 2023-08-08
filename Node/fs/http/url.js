const url = require('url');

let uri = 'http://localhost:3000/?name=abhi&gender=male';

let parsedURL = url.parse(uri, true);

console.log(parsedURL);

