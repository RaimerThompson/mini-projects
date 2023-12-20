document.querySelector('h1').addEventListener('click', run)

function run(){

  let num = parseInt(document.querySelector('.num').value)
  document.querySelector('.result').innerText= ''

  for (let i = 1; i <= num ; i++)
    document.querySelector('.result').innerText += ` stop`
}



// function run() {
//   let age = document.querySelector('.num').value
//   let message = ''


// if ( age < 16){
//   message = 'cannot drive'
// } else if ( age < 18){
//   message = 'cant hate from outside, cant even get in'
// } else if ( age < 21){
//   message='cannot drink'
// } else if ( age < 25){
//   message = 'cant rent cars affordably'
// } else if ( age < 30){
//   message = 'cannot rent fancy cars affordably'
// } else if (age >= 30){
//   message = 'nothing left to look forward to'
// }

// document.querySelector('.result').innerText= message

// }

// function sub(num1, num2){
//   alert(num1 - num2)
// }

// // sub(50,30)

// function divide(num1, num2 , num3){
//   console.log((num1 / num2 / num3));
// }

// divide(27,3,3)

// function mul(num1, num2, num3){
//   return(num1 * num2 * num3)
// }

// mul(2,4,2)

// function three(num1 , num2, num3){
//   return((num1 + num2)%num3)
// }

// three(2,2,3)

// function four (num1, num2, num3, num4){
//   let num = num1 * num2

//   if (num > 100){
//     console.log(num3 + num4);
//   }else if (num < 100){
//     console.log(num3 - num4);
// } else {
//   console.log((num1 * num2 * num3)& num4)
// }
// }

// four(20, 5, 7, 22)

// function savage(){
// for(let i = 1; i<21; i++){
//  document.querySelector('.result').innertext += ' 21';
// }
// }

// savage()