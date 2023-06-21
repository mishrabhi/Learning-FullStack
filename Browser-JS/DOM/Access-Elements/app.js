// tag Names

let headings = document.getElementsByTagName('h1');

console.log(headings);      //It will give all the elements by h1 in console


//class Name

let elementByClassName = document.getElementsByClassName('test');

console.log(elementByClassName);


// id

let eleById = document.getElementById('hello');
console.log(eleById);



// querySelector
// querySelectorAll

let h1 = document.querySelector('h1');
console.log(h1);           //it will give only the first element by given tagName

let allH1 = document.querySelectorAll('h1');
console.log(allH1);       //it will give the list of all the elements by given tagName




let byId = document.querySelector('#hello')        //use # (represents id)
console.log(byId);

byId.innerText = 'Modified'
console.log(byId);       //it will give the modified text



let byClass = document.querySelector('.test');      // use . (represents class)
console.log(byClass);


let inpt = document.querySelector('input[type="text"]');
console.log(inpt)


document.querySelector('body').style.backgroundColor = 'blue'


