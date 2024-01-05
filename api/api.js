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


//create a tony hawk pro skater constructor that makes skating game character with 4 properties and 3methods

function TonyHawkCharacter(chName, chStance, chSponsor, chMove){
  this.characterName = chName
  this.stance = chStance
  this.sponsor = chSponsor
  this.specialMove = chMove
  this.flip = function (){
    console.log('kick flip!!');
  }
  this.taunt = function (){
    console.log(`Dont make me use my ${this.specialMove}`);
  }
  this.grab = function (){
    console.log('Melon Grab');
  }
  
}

let kareemCampbell = new TonyHawkCharacter('Kreem', 'goofy', 'element', ' ghetto bifrd' )


//// APIs ////

//get a dog photo from dog.ceo api and place the photo in teh DOM

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => res.json())  //parse response as JSON
  .then(data =>{
    console.log(data);
    document.querySelector('.img').src = data.url
  })
  .catch(err =>{
    console.log(`error ${err}`);
  })


  // the interface is the http://dog.ceo
  //used the fecth method to send that request to the server
  //that dog.ceo url is listening for requests and when it hears a fetch request it grabs its data from the database
  //then it responds with that data with an object data


  //create pizza object

  let pizza = {}

  pizza.toppings = ['pepperoni', 'onion', 'jalapenos']
  pizza.size = 'large'
  pizza.crust = 'stuffed'
  pizza.sauce = 'heavy'
  pizza.estimatedDelivery = function(){
    console.log('calculating');
  }
  pizza.burnMouth = function(){
    console.log('ouchies');
  }
  pizza.frisbee = function(){
    console.log('weeeeeeeeeee');
  }


  //drinks api

  // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  // .then(res => res.json())
  // .then(data => {
  //   console.log(data.drink);
  // })
  // .catch(err =>{
  //   console.log(`error ${err}`);
  // })