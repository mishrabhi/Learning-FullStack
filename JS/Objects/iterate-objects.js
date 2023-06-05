
var person = {

    name: 'Ryan dhal',

    age: 36,

    gender: 'male',

    interests: ['music', 'skiing'],

    bio: function () {
        console.log(`${this.name} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}`);
    },

    greetings: function () {
        console.log(`Hi I'm ${this.name}`);
    }

};

console.log(Object.keys(person));    // [ 'name', 'age', 'gender', 'interests', 'bio', 'greetings' ]

var personKeys = Object.keys(person);    //array of keys for
for(var i = 0; i<personKeys.length; i++) {
    console.log(person[personKeys[i]])
}  

// OP:
// Ryan dhal
// 36
// male
// [ 'music', 'skiing' ]
// [Function: bio]
// [Function: greetings]
