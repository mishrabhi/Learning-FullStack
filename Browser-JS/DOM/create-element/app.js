let userName = prompt('Please enter your Name');
let p = document.querySelector('p');

if(userName) {
    p.innerText = `Welcome ${userName}`;
    console.log(p);
    document.body.appendChild(p)
} else {
    p.innerText = "Please provide your name"
    document.body.appendChild(p)
}