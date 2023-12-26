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
