setTimeout(function(){
    console.log("Console in a sec")
},1000)

let i = 0;

let interValId = setInterval(() => {
    console.log('Hello World');
    if(i === 2) {
        clearInterval(interValId)
    }
    i++;
}, 1000);

console.log(interValId);

setImmediate(() => {
    console.log('Hello I am set Immediate')
})


setTimeout(() => {
    console.log('Running in 0 sec')
},0)

