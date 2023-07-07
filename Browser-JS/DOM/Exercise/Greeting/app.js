let greet = document.querySelector('#greet');
let greeting = document.querySelector('h1');
let person = 'Abhishek'

greet.onclick = function greetByTime(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    if(currentHour < 12){
        greeting.innerText = `Good Morning ${person}`
    } else if (currentHour < 16) {
        greeting.innerText = `Good Afternoon ${person}`
    } else if (currentHour < 22) {
        greeting.innerText = `Good Evening ${person}`
    } else {
        greeting.innerText = `Good Night ${person}`
    }
}

//console.log(currentTime);
//console.log(currentHour);
