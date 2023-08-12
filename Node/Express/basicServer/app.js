//import express
let express = require('express');

// express initialized
let app = express();

//index route
app.get('/',(req, res) => {
    res.send('Hello Express')
});

//Get request
app.get('/contact', (req, res) => {
    res.send('Contact page')
});

//post request
app.post('/post', (req, res) => {
    res.send('Post req check')
});

//Put request(used to update)
app.put('/update', (req, res) => {
    res.send('tested put req')
});

// Delete request
app.delete('/delete', (req, res) => {
    res.send('delete req check')
});



app.listen(3000, (err) => {
    console.log('Server up and running')
});

