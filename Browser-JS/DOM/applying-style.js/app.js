let firstPara = document.querySelector('p');
let secondPara = document.querySelector('#secondPara');
let heading = document.querySelector('.bg');

console.log(firstPara);

firstPara.style.color = 'blue';
firstPara.style.fontSize = '20px';


// TO apply multiple styles at a time on a element, cssText can be used

secondPara.style.cssText = 'color:white; backgroundColor:black'

//To check the style already applied on an element:

console.log(firstPara.style.cssText);     //  color: blue; font-size: 20px



console.log(heading.classList[0]);      //bg

console.log(heading.className);      //bg

heading.className += 'color';