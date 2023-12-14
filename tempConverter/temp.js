document.querySelector('#submit').addEventListener('click', Convertor)

  // total = (total * (9/5) + 32);


function Convertor(){
//get input value for celcicus

let temp = document.querySelector('#input').value

// convert value into fahrenheit

temp = temp * 9/5 + 32;

//show it on screen

document.querySelector('#total').innerText = temp
}
 

 