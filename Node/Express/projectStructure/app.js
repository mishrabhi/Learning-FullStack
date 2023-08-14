const express = require('express');
const path = require('path');
const middleWares = require('./middlewares/appmiddleware');
const routeHandler = require('./routeHandler/routes');
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(middleWares.logger);
app.use(express.static(path.join(__dirname, '/views/static')));


//routes
app.get('/', routeHandler.index);
app.get('/contact', routeHandler.getContact);
app.post('/contact', routeHandler.postContact);



app.use(middleWares.handleNotFound);
app.use(middleWares.handleError);
app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Server up and running on port 3000')
});


