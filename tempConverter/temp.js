document.querySelector('#submit').addEventListener('click', convert)

function convert(){
//get valuye for celcuis input
let tempCelc = document.querySelector('#c__input').value
//convert c to fahren
tempCelc = tempCelc * 9/5 + 32
//show result in result 
let result = document.querySelector('#result')

result.innerText =`${tempCelc} Fahrenheight`


//get valuye for celcuis input
let tempFah = document.querySelector('#f__input').value
//show result in fahrenheigt value
//convert c to fahren
tempFah = (tempFah - 32) * 5/9 
//show result in result 
console.log(tempFah);
//show result in fahrenheight input
result.innerText =`${tempFah} Celcius`

}



