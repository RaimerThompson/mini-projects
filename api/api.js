// arrays practice

//create and array of numbers. sum of arrays. console the sum
let arr = [2,4,6,5,20,10,30]

let sum = arr.reduce((acc , c) => acc + c, 0)
console.log(sum);


//create function takes in an array of numbers and return new array that is original number squared

function numSquared (arr) {
  let newArr = arr.map(num => num**2)
}


// create function that takes a string and print the reverse of that string to console
  let unoReverse = str => console.log(str.split('').reverse().join(''))

  unoReverse('rey')


//create function that takes in a string and alert if the string is a palindrome (words that are the same backwards as forwards) or not

const palindromeCheck = str => console.log(str === str.split('').reverse().join(''))

palindromeCheck('wawaw')

//objects
//create a dog object with 4 properties and 3 methods

let dog = {}

dog.breed = 'poodle'
dog.color = 'golden'
dog.legs = 4
dog.name = 'Fido'
dog.bark = function (){
  console.log('woooof');
}
dog.jump = function (){
 console.log('up down up down'); 
}
dog.fetch = function(){
  console.log('yayyyyyyayyayyayyayay');
}