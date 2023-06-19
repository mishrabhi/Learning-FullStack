//window.location
// The location property points to an object that contains information about the URL of the currently loaded page
//location

console.log(window.location);     //it will give the whole location of the page including href, origin, protocol, host

console.log(location.href);      //http://127.0.0.1:5500/Browser-JS/BOM/index.html


// There are also three methods that location property provides, namely reload(), assign() and replace().

window.location.href =  'https://google.com';
location.href =  'https://google.com';
location = 'https://google.com';
locatiom.assign('https://google.com');


//The replace() method is almost the same as assign(). The difference is that it doesn't create an entry in the browser's history list

location.replace('https://www.google.com');

//To reload a page, you can use the following code:
location.reload();

