// We are getting this list from backend

let hobbies = ['Coding','Riding','Gardening','Lifting'];
let hobbyList = document.querySelector('#hobby');

hobbies.forEach(ele => {
    let li = document.createElement('li');
    li.innerText = ele;
    hobbyList.appendChild(li)
})



//you can use the below method too: 

// hobbyList.innerHTML = hobbies.map(ele => `<li>${ele}</li>`).join('')


