// setInterval();
// The setTimeout() method attempts to execute the given code once, after a specific number of milliseconds.

//window.setInterval()
// The setInterval() method attempts to execute it repeatedly after a specified number of milliseconds has passed.

console.log('Programs Starts');

//  setInterval(function() {
//     console.log('Hello I am running')
// }, 2000)


let count = 1;

//It will return a ID, which you can use this ID to clear timeout by using clearTimeout(id).
let interval = setInterval(() => {
    console.log(count)
    if(count === 5) {
        console.log(interval)
        clearInterval(interval);
    }
    count++;
},1000)


// setTimeout(greet,2000)

setTimeout(() => {
    console.log(`I am timeout`)
}, 2000)

console.log('Program Ends');
// setInterval();
// The setTimeout() method attempts to execute the given code once, after a specific number of milliseconds.

//window.setInterval()
// The setInterval() method attempts to execute it repeatedly after a specified number of milliseconds has passed.

console.log('Programs Starts');

//  setInterval(function() {
//     console.log('Hello I am running')
// }, 2000)


let count = 1;

//It will return a ID, which you can use this ID to clear timeout by using clearTimeout(id).
let interval = setInterval(() => {
    console.log(count)
    if(count === 5) {
        console.log(interval)
        clearInterval(interval);
    }
    count++;
},1000)


// setTimeout(greet,2000)

setTimeout(() => {
    console.log(`I am timeout`)
}, 2000)

console.log('Program Ends');
