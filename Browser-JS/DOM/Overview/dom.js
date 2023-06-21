
console.log(window.document);

console.log(window.document.documentElement);

console.log(document.documentElement.childNodes);

console.log(document.documentElement.childNodes[2]);

console.log(document.documentElement.childNodes[2].childNodes[3]);

document.documentElement.childNodes[2].childNodes[3].innerText = "I am coming from Javascript"

document.documentElement.childNodes[2].childNodes[3].style.color = "blue"

document.documentElement.childNodes[2].childNodes[3].style.backgroundColor = "Black"