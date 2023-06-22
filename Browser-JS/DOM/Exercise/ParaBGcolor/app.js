// let firstPara = document.querySelector('#firstPara')
// console.log(firstPara);

// firstPara.style.backgroundColor = 'blue'

// let secondPara = document.querySelector('#secondPara')
// secondPara.style.backgroundColor = 'red'

// let thirdPara = document.querySelector('#thirdPara')
// thirdPara.style.backgroundColor = 'yellow'

function RandomNumber(min, max) {
    return Math.random() * (max - min) + min
};

function changeColor() {
    let paras = document.querySelectorAll('p');

    paras.forEach(ele => {
        ele.style.backgroundColor = `rgb(${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))})`;
    })
}
setInterval(changeColor, 1000)






// setInterval(()=> {
//     document.querySelector('#firstPara').style.backgroundColor = `rgb(${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))})`;
//     document.querySelector('#secondPara').style.backgroundColor = `rgb(${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))})`;
//     document.querySelector('#thirdPara').style.backgroundColor = `rgb(${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))})`;
// },1000)

// setInterval(() => {
//     document.querySelector('#secondPara').style.backgroundColor = `rgb(${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))})`
// },1000)



// var a = `rgb(${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))},${parseInt(RandomNumber(1,255))})`
// console.log(a);