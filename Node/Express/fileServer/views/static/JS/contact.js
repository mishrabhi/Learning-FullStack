let submitForm = document.querySelector('#submitContact');
let inpt = document.querySelector('#name');
let showMessage = document.querySelector('#showMessage')
submitForm.addEventListener('submit', e => {
    console.log('Form Submitted')
    showMessage.innerText = "";
    showMessage.style.color = "";
    e.preventDefault();
    
    let data = {
        name:inpt.value 
    }

    if(data.name) {
        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
            .then(data => {
                showMessage.innerText = `Thanks for Submitting the request ${data.data.name}`
                showMessage.style.color = 'green'
                inpt.value = '';
            }).catch(err => console.log(err))
    } else {
        showMessage.innerText = "Please enter your name";
        showMessage.style.color = 'red';
    }
});