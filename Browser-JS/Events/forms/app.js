let form = document.querySelector('form');
let para = document.querySelector('#error')

//form.addEventListener('submit',handler);

form.onsubmit = function(e) {
    para.innerText = ""
    let inpName = document.querySelector('input[name=name]').value;
    let email = document.querySelector('input[name=email]').value;

    if(!inpName || !email) {
        para.innerText = "Name and Email field are required"
        para.style.color = 'red'
    }
}


let inpName = document.querySelector('input[name=name]');

inpName.onblur = function(e) {
    let value = inpName.value;

    if(!value || value.length <= 3) {
        error.innerText = 'Name field requires atleast 3 characters';
        error.style.color = 'red';
        inpName.style.broder = '1px solid red';
    } else {
        error.innerText = '';
        error.style.color = '';
        inpName.style.border = '1px solid green'
    }
}


inpName.onfocus = function(e) {
    para.innerText = 'Name is mandatory';
    para.style.color = 'red';
}