

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}
// console.log(parseInt(getRandomNumber(1,255)));
//rgb(125,100,150)
setInterval(() => {
    document.querySelector('body').style.backgroundColor = `rgb(${parseInt(getRandomNumber(1,255))}, ${parseInt(getRandomNumber(1,255))}, ${parseInt(getRandomNumber(1,255))})`
}, 1000);

