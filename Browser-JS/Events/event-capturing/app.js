let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner');
let btn = document.querySelector('button');

function innerHandler(e) {
    alert('inner')
}

function outerHandler(e) {
    alert('outer')
}

function btnHandler(e) {
    alert('Button')
}



//Propogation is set false by default in capturing, if you want the capturing to happen you can change it to true just like below:
outer.addEventListener('click',outerHandler,true);
inner.addEventListener('click',innerHandler,true);
btn.addEventListener('click',btnHandler,false);