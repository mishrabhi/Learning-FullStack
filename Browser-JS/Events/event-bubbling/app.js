let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner')
let btn = document.querySelector('button');

outer.onclick = function(e) {
    e.stopPropogation();
    alert('Outer clicked');
    outer.style.border = '1px soild red';
}

inner.onclick = function() {
    e.stopPropogration();
    alert('Inner clicked');
    inner.style.border = '1px soild red';
}

btn.onclick = function() {
    e.stopPropogation();
    alert('Button clicked');
    btn.style.border = '1px soild red';
}



//To stop the bubbling from going down to up we use:
// e.stopPropogation();