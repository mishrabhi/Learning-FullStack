function square(num) {
    return new Promise((resolve, reject) => {
        if(typeof num == 'number') {
            return resolve(num*num)
        }else {
            return reject('Please pass a valid number')
        }
    })
}

function addFive(n) {
    return new Promise((resolve, reject) => {
        if(typeof n == 'number'){
            return resolve(n+5)
        }else {
            reject('Please pass valid number to add')
        }
    })
}


// square('5').then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// square('5')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


square(5)
    .then(data => addFive('data'))
    .then(dt => console.log('Final res', dt))
    .catch(err => console.log(err));


Promise.all([square(5), addFive(10)]).then(values => {
    console.log('Values', values)
}).catch(err => console.log(err))

// Async Await
// 1. It can be used only on function which starts with async

async function myRes() {
    try {
        let res = await square(10);
        let finalRes = await addFive('res');
        console.log('final result', finalRes)
    } catch (error) {
        console.log('Error Thrown', error)
    }
}

myRes();
