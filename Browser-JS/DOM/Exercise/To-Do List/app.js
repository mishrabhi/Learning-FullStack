let inpt = document.querySelector('input[type="text"]');
let submit = document.querySelector('input[type="submit"]');
let listItems = document.querySelector('.list-items');

let items = JSON.parse(localStorage.getItem('items')) || [];


function addItems() {
    let value = inpt.value
    if (!value) return
    let dt = {
        hobby: value,
        checked: false
    }

    items.push(dt);
    localStorage.setItem('items', JSON.stringify(items));
    render(listItems, items)
    inpt.value = ''
}

function render(listItems, items) {
    listItems.innerHTML = items.map((ele,i) => {
        return `<li>  
                <input type="checkbox" ${ele.checked? 'checked':''} data-id = ${i}>
                <label>${ele.hobby}</label>
                </li>
                `
    }).join('')
}

function toggle (e) {
    if(!e.target.matches('input')) return
    let index = e.target.dataset.id;
    items[index].checked = !items[index].checked;
    localStorage.setItem('items', JSON.stringify(items));
    render(listItems,items)
}

render(listItems, items);
submit.addEventListener('click', addItems);
listItems.addEventListener('click', toggle)