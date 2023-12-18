document.querySelector('h1').addEventListener('click', run)

function run() {
  let age = document.querySelector('.num').value
  let message = ''


if ( age < 16){
  message = 'cannot drive'
} else if ( age < 18){
  message = 'cant hate from outside, cant even get in'
} else if ( age < 21){
  message='cannot drink'
} else if ( age < 25){
  message = 'cant rent cars affordably'
} else if ( age <= 30){
  message = 'cannot rent fancy cars affordably'
} else if (age > 30){
  message = 'nothing left to look forward to'
}

document.querySelector('.result').innerText= message

}


