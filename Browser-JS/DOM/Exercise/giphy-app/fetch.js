let inpt = document.querySelector('input[type=text]');
let submit = document.querySelector('input[type=submit]');
let displayImg = document.querySelector('.display-imgs');


// function loadSearchedGif() {
//     let value = inpt.value;
//     displayImg.innerHTML = '';
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=6bgOZPj9Q8GjnAS6N1Q6Rpd2will3AGz&q=${value}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

//     fetch(url)
//         .then(resp => resp.json())
//         .then(bodyData => {
//             bodyData.data.forEach(ele => {
//                 let url = ele.images.fixed_height.url
//                 let img = document.createElement('img');
//                 img.src = url
//                 displayImg.appendChild(img);
//             })
//         }).catch(err => {
//             console.log(err)
//         })
// }

async function loadSearchedGif() {
    let value = inpt.value;
    displayImg.innerHTML = '';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=6bgOZPj9Q8GjnAS6N1Q6Rpd2will3AGz&q=${value}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    try {
        let response = await fetch(url);
        let resData = await response.json()
        console.log(resData.data)
        resData.data.forEach(ele => {
            let url = ele.images.fixed_height.url
            let img = document.createElement('img');
            img.src = url
            displayImg.appendChild(img);
        })
    } catch (error) {
        console.log(err)
    }
}




submit.addEventListener('click', loadSearchedGif);