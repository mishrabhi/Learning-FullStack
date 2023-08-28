const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

//application level middleware

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}


//Application level Middlewares

//This will only parse JSON payload

app.use(express.json());

//This will parse URL encoded data

app.use(express.urlencoded({extended:false}))


// Middleware respond back static files
app.use(logger);
app.use(express.static(path.join(__dirname, 'views/static')));


//CDN - Content Delivery Network

// app.use((req, res, next) => {
//     req.isAuthorised = false;
//     console.log('Current Time', Date.now());
//     next();
// });


function checkAuthentication(req, res, next) {
    if(req.isAuthorised) {
        next()
    } else {
        res.status(403).send('You are not authorised')
    }
}


app.get('/', (req, res) => {
    console.log('Final Handler')
    res.sendFile(__dirname+'/views/index.html');
});

//Route level middlewares
app.get('/authorised-user-only', checkAuthentication, (req, res) => {
    res.send('Responding to authorised user')
});

app.get('/contact', function(req, res, next) {
    fs.readFile(__dirname+'/views/contact.html', 'utf8', function(err,data) {
        if(err) {
            console.log(err)
            next(err)
        } else {
            res.write(data)
            res.end();
        }
    })
});

// app.get('/contact', (req,res) => {
//     res.sendFile('./views/contact.html')
// })


app.post('/contact', (req,res) => {
    //body data
    console.log(req.body)
    res.status(201).json({message: 'Request Recieved', data: req.body})
});


app.use((req, res, next) => {
    res.status(404).send('Page Not Found')
});


//ErrorHandling Middleware

app.use((err, req, res, next) => {
    if(err) {
        console.log(err);
        res.status(500).send('Something went wrong, please try again later')
    }
});


app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Server up and running on port 3000')
});