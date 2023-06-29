let btn = document.querySelector('button');

// function handler1() {
//     alert('Handler 1')
// }


btn.addEventListener('click', () => {
    alert('Handler 1')
});


function handler2() {
    alert('Handler 2')
}


function handler3() {
    alert('Handler3');
    btn.removeEventListener('click', handler3)     //after this the handler3 will be removed,it will show only once
}


btn.addEventListener('click', handler2);
btn.addEventListener('click', handler3);