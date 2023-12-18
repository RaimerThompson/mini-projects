document.querySelector('.add1').addEventListener('click', cartQuantity)
document.querySelector('.add2').addEventListener('click', cartQuantity)
document.querySelector('.add3').addEventListener('click', cartQuantity)
document.querySelector('.add4').addEventListener('click', cartQuantity)
document.querySelector('.add5').addEventListener('click', cartQuantity)

function cartQuantity(){
  let cart = 0
  cart = cart+1
  
console.log(cart);

document.querySelector('.result').innerText = cart
}