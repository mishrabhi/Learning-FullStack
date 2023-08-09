let click = document.querySelector('.btn')
async function loadSearchedImg() {
    let url =  `https://api.nasa.gov/planetary/apod?api_key=iZKAphe3yTzNQsrK4zTDtnAZx3EwZb0lOPf3A7nG`
    try {
        let response = await fetch(url);
        let resData = await response.json()
        console.log(resData)
        let image = document.createElement('img');
        image.className = "center-fit"
        image.src = resData.hdurl
        document.querySelector('.imgbox').appendChild(image)
        
    } catch (error) {
        console.log(error)
    }
}

click.addEventListener('click', loadSearchedImg);