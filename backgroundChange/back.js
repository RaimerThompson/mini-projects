document.querySelector('.blue__btn').addEventListener('click', blueChange)

function blueChange(){
  //get the body html
let body = document.querySelector('body');
//chnage the background color of the body blue

body.style.backgroundColor= "blue"
}
document.querySelector('.green__btn').addEventListener('click', greenChange)

function greenChange(){
  //get the body html
let body = document.querySelector('body');
//chnage the background color of the body green

body.style.backgroundColor= "green"
}
document.querySelector('.red__btn').addEventListener('click', redChange)

function redChange(){
  //get the body html
let body = document.querySelector('body');
//chnage the background color of the body red

body.style.backgroundColor= "red"
}