// Object literal:

var student = {
    name: 'Abhishek',
    age: 23,
    country : 'India',
    gender : 'Male',
    Married: false
};

console.log(student);   

// Acccessing property from object using DOT operator

console.log(student.name);    //Abhishek
console.log(student.Married);   // false


// Adding new key-pair(values) in object:

student.higherEducation = 'Masters'

console.log(student);

console.log(student.higherEducation);  // Masters


//bracket Operator:

console.log(student['country']);   //India

student['length'] = '5.8 ft';

console.log(student);

console.log(student['length']);   // 5.8 ft




var abhi = {
    rollNo: 202303,
    name : 'Abhishek Mishra',
    gender : 'male',
    DOB : '14 Dec 1998',
    married : false,
    higherEducation : 'Masters',
    hobbies : ['Sports', 'Coding', 'Music'],
    address : {
        street : 18,
        Area : 'Vishnapuri',
        State : 'UP'
    },
    results : {
        firstSem : {
            Maths : 80,
            Physics : 70,
            Chemistry : 55
        },
        secondSem : {
            DS : 70,
            Java : 60,
            AOS : 65
        }
    },
    education : [
        {
            degree : 'Graduation',
            yearOfPassing : 2015,
            honor : false
        },
        {
            degree : 'masters',
            yearOfPassing : 2018,
            honor : true
        },
        {
            degree : 'PhD',
            yearOfPassing : 2023,
            honor : false
        }
    ]
}

console.log(abhi);
// Output:
// {
//     rollNo: 202303,
//     name: 'Abhishek Mishra',
//     gender: 'male',
//     DOB: '14 Dec 1998',
//     married: false,
//     higherEducation: 'Masters',
//     hobbies: [ 'Sports', 'Coding', 'Music' ],
//     address: { street: 18, Area: 'Vishnapuri', State: 'UP' },
//     results: {
//       firstSem: { Maths: 80, Physics: 70, Chemistry: 55 },
//       secondSem: { DS: 70, Java: 60, AOS: 65 }
//     },
//     education: [
//       { degree: 'Graduation', yearOfPassing: 2015, honor: false },
//       { degree: 'masters', yearOfPassing: 2018, honor: true },
//       { degree: 'PhD', yearOfPassing: 2023, honor: false }
//     ]
//   }
  

console.log(abhi.hobbies);  // [ 'Sports', 'Coding', 'Music' ]

console.log(abhi.hobbies[1]);   // Coding

console.log(abhi.results.secondSem.DS);  //70

console.log(abhi.education[0].yearOfPassing);  //2015

console.log(abhi.address.Area);   // Vishnapuri



// Pass by Value and Pass by Reference

var obj = {
    name : 'js'
};

var obj2 = obj;
obj2.name = 'javascript';
console.log(obj);   // { name : 'javascript' }

console.log(obj2);  // // { name : 'javascript' }

console.log(obj === obj2);   //true

console.log(obj.name);  //javascript


var p1 = {
    name : 'Ashu'
};

var p2 = p1;
console.log(p1 == p2);  //true

var p3 = {
    name : 'ashu',
    //defining method
    returnName: function(n) {
        return n;
    }
}

p3.returnName()










