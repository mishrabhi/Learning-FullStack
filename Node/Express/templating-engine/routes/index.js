let age = 17;

module.exports.index = (req,res) => {
    res.render('index', {
        layout: 'layout',
        title: 'Home',
        name : 'Abhishek',
        age: age > 18 ? true : false,
        htmlContent: '<p>This is HTML Content</p>',
        hobbies: ['Coding', 'Workout', 'Gardening'],
        description: {
            name: 'JS',
            age: 20,
            gender: 'Female' 
        },
        friends: [
            {
                name: 'Ryan',
                gender: 'Male'
            },
            {
                name: 'Dhal',
                gender: 'Male'
            },
            {
                name: 'Ronnie',
                gender: 'Female'
            }
        ]


    })
}


module.exports.contact = (req, res) => {
    res.render('contact', {
        title: 'contact',
        layout: 'layout'
    });
}