module.exports.logger = function(req,res,next){
    console.log(req.method, req.url);
    next();
}

module.exports.handleNotFound = (req,res,next) => {
    res.status(404).send('Page Not Found')
};


module.exports.handleError = (err,req,res,next) => {
    if(err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
}