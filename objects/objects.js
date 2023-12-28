let num = 'bday'
num = 'christmas'
const ttty = num.toUpperCase(num)
console.log(ttty);

let varia = 'boos'
varia = varia.substring(1)
console.log(varia);

function take5(n1, n2, n3, n4, n5){

let difference = 100- n1 - n2- n3 -n4 -n5
  alert(Math.abs(difference))
}

take5(2,3,4,5,6)


function nums3(n1, n2, n3){
  console.log(Math.max(n1,n2,n3))
  console.log(Math.min(n1,n2,n3))

}

nums3(4,55,23)

//heads tails

// function headtails(){
//   let ran = Math.random()
//   if (ran > .5 ){
//     return('Heads')
//   }else{
//     return('tails')
//   }
//   console.log(ran);
// }

// headtails()

const headtails = () => Math.random() < .5 ? 'heads' : 'tails' 

//looops

function takenum (n){
  for (let i = 1; i <= n ; i++){
  let result = headtails()
console.log(result);
}
}
takenum(10)


//arrays practice

//loop and print each show

let array123 = ['mighty', 'foody', 'longest yard']

// for ( let i = 0; i < array123.length; i++){
//   console.log(array123[i]);
// }

array123.forEach(show => console.log(show))

//create array of numbers - return new array that includes every even number from the prev array

let newArray = [2, 3, 6, 7, ,8 ,9 ,10]

let onlyEvens = arr => arr.filter(n => n % 2 === 0)

console.log(onlyEvens(newArray));


//create function that takes array of numbers 
//alert the sum of the 2nd lowest and 2nd highest number

function sumSecondLowandHigh(arr){
  let sorted = arr.sort((a,b) => a-b)
  alert( sorted[1] + sorted[sorted.length - 2])
}

sumSecondLowandHigh([2,3,1,5,4])




//OBJETCS//

//create a stopwatch object that has four properties and 3 methods

let stopwatch = {}

stopwatch.brand = 'Nike'
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.size= 'shhmmedium'

stopwatch.start = function(){
  console.log('STARTTINGNGNGGGG');
}
stopwatch.stop = function(){
  console.log('STOPPPPPINGNGGGG');
}
stopwatch.sayBrand = function(){
  console.log(stopwatch.brand);
}
