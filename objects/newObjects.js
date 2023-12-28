//create function that returns rock paper scissors as randomly as possible

function rockPaperScissors(){
  let random = Math.random()

  if (random < 1/3){
    return 'rock'
  }else if  (random < 2/3){
    return 'paper'
  } else {
    return 'scissors'
  }

}
rockPaperScissors()

//conditional
//create a function that takes in a choice (rock / paper / scissors) and determine if they won the game against a bot using the above function

function checkWin(playerChoice){
  let botChoice = rockPaperScissors()

  if ((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
    console.log('You Win');
  }else if ( playerChoice === botChoice){
    console.log('You Tie');
  }else {
    console.log('You Lose');
  }
}

checkWin('rock')


//loops
// create a function that takes an array of choices. play the game x times where x is the number of choices in the array. print the results of each game

function arrayOfChoices(arr){
  let x = arr.length

  for ( let i = 0; i < x; i++){
    console.log(arr[i]);
  }
}

arrayOfChoices(['dog', 'fish', 2, 66, 99, 'phil'])

// another way of writing the function

function playGamesXTimes(arr){
  arr.forEach ( choice => checkWin(choice))
}

playGamesXTimes(['rock','paper', 'scissors'])

//arrays
//create and array of numbers. sum all of the numbers . alert the sum

let newArr = [42,19,77,33,57]

let sum = nums.reduce( (acc, c) => acc + c, 0)

alert (sum)
//acc     //c
// 0       42
// 42      19
// 71      77
// 138     33
// 171     57  
// 228


//object
//create a mouse object that has four properties and 3 methods


let mouse = {}

mouse.brand = 'logitech'
mouse.name = 'razr 300'
mouse.color = 'black'
mouse.wireless = true

mouse.move = function(){
  console.log('moveeeee');
}
mouse.stop = function(){
  console.log('stoooooppp');
}
mouse.click = function(){
  console.log('clickkkyyyy');
}


let mouse2 = {}

mouse2.brand = 'logitech'
mouse2.name = 'razr 300'
mouse2.color = 'silver'
mouse2.wireless = true

mouse2.move = function(){
  console.log('moveeeee');
}
mouse2.stop = function(){
  console.log('stoooooppp');
}
mouse2.click = function(){
  console.log('clickkkyyyy');
}


let mouse3 = {}

mouse3.brand = 'logitech'
mouse3.name = 'razr 300'
mouse3.color = 'grey'
mouse3.wireless = true

mouse3.move = function(){
  console.log('moveeeee');
}
mouse3.stop = function(){
  console.log('stoooooppp');
}
mouse3.click = function(){
  console.log('clickkkyyyy');
}

//this is what constructors are made for template to reuse 


//Constructor synthax

function Makecar(carMake, carModel, carColor, NumOfDoors){

this.make = carMake
this.model = carModel
this.color = carColor
this.doors = NumOfDoors
this.honk = function (){
  alert('beep beep beep')
}
this.lock = function(){
  alert(`Locked ${this.doors} doors`)
}
}

let hondaCivic = new Makecar('Honda', 'Civic', 'Silver', 4)
let teslaRoadster = new Makecar('Tesla', 'Roadster', 'Red', 2)



//create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSFCharacter (punch, kick, catchPhrase, specialMove){
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function(){
      console.log(`You cant handle my ${this.specialMove}`)
    }
    this.winning = function(){
      console.log(`haha ${this.catchPhrase}`)
    }
    this.dash = function(){
      console.log('whoop, missed me')
    }
}

let ryu = new MakeSFCharacter('high', 'high', 'Get Over here', 'Haddddukeen')