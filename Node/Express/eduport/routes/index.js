exports.index = (req,res) => {
    res.render('index', {
        title: 'home',
        layout: 'layout'
    });
}