let para = document.querySelector('p');
console.log(para);  


para.innerText = "Hello I am <span>from </span> JS"     //it will modify the document as it is 

para.innerHTML = "Hello I am <span>from </span> JS"     //it will add span element in document


console.log(para.textContent);

// When you want to add text in the main document

// para.innerText = para.innerText + "How are you?";

para.innerText += 'How are you?';



