let para = document.querySelector('p')

console.log(para);

//Lets assign a function to an element's event

para.onclick = function(event) {
    alert('Hi, I am Clicked')                 //everytime you click on the para, alert with the given  message will appear
    // A way to cancel this
    para.onclick = null;                        // now it will give alert for once 
}