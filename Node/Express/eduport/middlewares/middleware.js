module.exports.logger = (req,res,next) => {
    console.log(req.method, req.url)
    next();
}


module.exports.notFound = (req,res,next) => {
    res.status(404).send('Page not found!');
}

module.exports.handleError = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something Went Wrong!')
};




