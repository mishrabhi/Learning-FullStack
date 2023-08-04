let inpt = document.querySelector('input[type=text]');
let submit = document.querySelector('input[type=submit]');
let displayImg = document.querySelector('.display-imgs');

function loadSearchedGif(e){
    let xhr = new XMLHttpRequest();
    let value = inpt.value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=6bgOZPj9Q8GjnAS6N1Q6Rpd2will3AGz&q=${value}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    xhr.onreadystatechange = handleResponse
    displayImg.innerHTML = '';
    function handleResponse() {
        if(xhr.readyState < 4){
            console.log('XHR readystate',xhr.readyState)
            return;
        }
        let responseData = JSON.parse(xhr.responseText).data;

        responseData.forEach(ele => {
            let url = ele.images.fixed_height.url
            let img = document.createElement('img');
            img.src = url
            displayImg.appendChild(img);
        });
    }
    console.log('Waiting for ready state to update')
    xhr.open('GET', url, true);

    xhr.send();
}

submit.addEventListener('click', loadSearchedGif);