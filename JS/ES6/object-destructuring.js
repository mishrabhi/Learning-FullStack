var person = {
    name: 'Thor',
    age : 30,
    gender : 'Male',
    married : false,
    hobbies: ['smashing', 'booz', 'playing with lights'],
    address: {
        street: 102,
        place : 'ashgaurd'
    }, 

    education : [
        {
            degree : 'graduation ',
            yearOfPassing: 2010,
            honor: false
        },
        {
            degree: 'masters',
            yearOfPassing: 2015,
            honor: true
        },
        {
            degree : 'phd',
            yearOfPassing: 2020,
            honor: false
        }
    ],

    freinds : [
        {
            name : 'Iron Man',
            hobbies: ['gadgets', 'science', 'computers']
        }
    ]
};


//let name = person.name
//let age = person.age
//let gender = person.gender


let {name,age,gender} = person
console.log(name);   //Thor
console.log(age);    //30

let{name:firstname,married} = person
console.log(firstname);    //Thor
console.log(married);     //false