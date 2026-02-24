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
## Project 5

``` Javascript

const insert = document.getElementById("insert")
window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
    <div class = "color">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " "? "Space": e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  </div>
  `
})

```
## Project 6

``` Javascript 

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0; i<6; i++){
    color+=hex[Math.floor(Math.random() * 16)]
  }
  return color
}
let interval = null

const startChangingColor = function(){
  if(!interval){
  interval = setInterval(changeBG, 1000)
  function changeBG(){
    document.body.style.backgroundColor = randomColor()
  }
}
}

const stopChangingColor = function(){
  if(interval){
    clearInterval(interval)
    interval = null
    console.log("Interval Stopped.")
  }
}
document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChangingColor)
```