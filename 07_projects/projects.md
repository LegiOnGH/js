# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-jjmaudhf?file=index.html)

# Solution Code

## Project 1

``` Javascript

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach( function(button){
  button.addEventListener('click', function(e){
    switch(e.target.id){
      case "grey":
      body.style.backgroundColor = e.target.id
      break;
      case "white":
      body.style.backgroundColor = e.target.id
      break;
      case "blue":
      body.style.backgroundColor = e.target.id
      break;
      case "yellow":
      body.style.backgroundColor = e.target.id
      break;
      default:
      body.style.backgroundColor = "white"
    }
  })
});

```
## Project 2

``` Javascript

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height."
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight."
  } else {
    const bmi = (weight/ ((height*height)/10000)).toFixed(2)
    let range = ''
    if(bmi<18.6){
      range = 'Underweight'
    } else if(bmi>= 18.6 && bmi<=24.9){
      range = 'Normal'
    } else{
      range = 'Overweight'
    }
    results.innerHTML = `<span>${bmi} (${range})</span>`
  }
});

```
## Project 3

``` Javascript

const time = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  time.innerHTML = date.toLocaleTimeString('en-IN')
}, 1000);

```
## Project 4

``` Javascript 

let randomNo = parseInt(Math.random() *100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let playGame = true
let prevGuess = []
let numGuess = 1

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid guess.")
  } else if(guess<1 || guess>100){
    alert("Please enter a number between 1 and 100.")
  } else{
    prevGuess.push(guess)
    checkGuess(guess)
    displayGuess(guess)
  }
}

function checkGuess(guess){
  if(guess === randomNo){
    displayMsg(`Congratulations! ${guess} is the correct number.`)
    endGame()
  } else if(guess < randomNo){
    displayMsg('You guessed it too low!')
  } else if(guess > randomNo){
    displayMsg('You guessed it too high!')
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++
  console.log(numGuess)
  remaining.innerHTML = `${11-numGuess}`
  if(numGuess===11){
    displayMsg(`Game Over!! \n Random Number was ${randomNo}`)
    endGame()
  }
}

function displayMsg(msg){
  lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMsg('')

    playGame = true;
});
}

```