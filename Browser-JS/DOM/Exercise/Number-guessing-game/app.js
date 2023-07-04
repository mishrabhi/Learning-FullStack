let submtBtn = document.querySelector('.guessSubmit');
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessField = document.querySelector('#guessField');

function random(min,max){
    return parseInt(Math.random() * (max - min) + min)
};

let randomValue = random(1,100);
let count = 1

function handler(e) {
    let inputVal = parseInt(guessField.value);
    console.log('Input Value',inputVal);
    console.log('Random Value', randomValue);

    // if(inputVal == '') {
    //    guessField.placeholder = `Please enter an integer value`
    // }
    
    if(count == 1) {
        guesses.innerText = 'Previous Guesses, '
    }

    if(count == 10) {
        lastResult.innerText = 'Times Up, Game over';
        lastResult.style.color = 'Red'
        lowOrHi.innerText = `Correct value is ${randomValue}`
        startGame();
    }else if(inputVal == randomValue) {
        lastResult.innerText = 'Guessed Correct ! Winner';
        lastResult.style.color = 'Green'
        lowOrHi.innerText = ''
        startGame()
    }else {
        guesses.innerText += ' '+inputVal
        lastResult.innerText = 'Incorrect';
        lastResult.style.color = 'Red'
        if(inputVal > randomValue){
            lowOrHi.innerText = 'Value is High!'
        }else {
            lowOrHi.innerText = 'Value is Low!'
        }
    }
    count++
    guessField.value = '';
    guessField.focus()
}
// this function resets the game to its original state
function resetGame(e){
    console.log(this)
    randomValue = random(1,100);
    count = 1;
    guesses.innerText = '';
    lowOrHi.innerText = '';
    lastResult.innerText= '';
    submtBtn.disabled = false;
    this.remove()
}

function startGame(){
    submtBtn.disabled = true;
    let btn = document.createElement('button');
    btn.innerText = 'Start Again';
    document.body.appendChild(btn);
    btn.addEventListener('click',resetGame)
}

submtBtn.addEventListener('click',handler)