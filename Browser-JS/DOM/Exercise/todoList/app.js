// We are getting this list from backend

let hobbies = ['Coding','Riding','Gardening','TEstts'];
let hobbyList = document.querySelector('#hobby');

// hobbies.forEach(ele => {
//     let li = document.createElement('li');
//     li.innerText = ele;
//     hobbyList.appendChild(li)
// })

hobbyList.innerHTML = hobbies.map(ele => `<li>${ele}</li>`).join('')


// let ul = document.createElement('ul')
// let li = document.createElement('li')
// ul.append('hobbies');