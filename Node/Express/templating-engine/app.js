const express = require('express');
const hbs = require('hbs');
const middleware = require('./middlewares/middleware')
const route = require('./routes/index')
const app = express();

app.set('views', __dirname + "/views");
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.use(middleware.logger);

app.get('/', route.index);

app.get('/contact', route.contact);


app.use(middleware.notFound);
app.use(middleware.handleError);

app.listen(3000, () => console.log('Server up and running'));