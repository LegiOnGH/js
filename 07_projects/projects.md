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
