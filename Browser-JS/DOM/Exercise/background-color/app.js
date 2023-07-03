function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}


document.querySelector('.submit').onclick = function(e) {
setInterval(() => {
    document.querySelector('body').style.backgroundColor = `rgb(${parseInt(getRandomNumber(1,255))}, ${parseInt(getRandomNumber(1,255))}, ${parseInt(getRandomNumber(1,255))})`
}, 1000)
};