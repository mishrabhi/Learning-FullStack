const path = require('path');
const fs = require('fs');

module.exports.index = (req,res) => {
    console.log('Final Handler')
    res.sendFile(path.join(__dirname,'../views/index.html'));
}

module.exports.getContact = function(req,res,next) {
    fs.readFile(path.join(__dirname,'../views/contact.html'), 'utf8', function(err,data){
        if(err) {
            console.log(err)
            next(err)
        } else {
            res.write(data);
            res.end();
        }
    })
}

module.exports.postContact = (req,res) => {
    //body data
    console.log(req.body)
    res.status(201).json({message: 'Request Recieved', data: req.body})
}