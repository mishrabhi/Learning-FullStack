function RandomNumber(min, max) {
    return Math.random() * (max - min) + min
};

let rndmNumber = parseInt(RandomNumber(1,100));

console.log(rndmNumber);

// console.log(parseInt(RandomNumber(1,100)));

document.querySelector('.guessSubmit').onclick = function(e) {
    let guessNumber = document.querySelector('.guessField');
    if (guessNumber == rndmNumber) {
        alert('Bravoo!! You guessed it right')
    }

    else if (guessNumber > rndmNumber) {
        alert('The guess is too high')
    }

    else {
        alert('The guess is too low')
    }
}
