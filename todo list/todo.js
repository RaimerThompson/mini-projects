let input = document.querySelector('.input')
let addBtn = document.querySelector('.add')
let todoContainer = document.querySelector('.todos')


//grab the add btn and added event listner 
addBtn.addEventListener('click', function(){
  //created the todo element paragraph
  let paragraph = document.createElement('p')
  paragraph.classList.add('style')
  //assign the input value to the new p innertext
  paragraph.innerText = input.value
  //emptied the input value to allow to add new value
  input.value= ''
  // added the new paragraph element
  todoContainer.appendChild(paragraph)
  //added click function to new p element to add the style line-through
  paragraph.addEventListener('click', function (){
    paragraph.style.textDecoration= 'line-through'
  })
  // added a double click to  and remove the p elemtn todo
  paragraph.addEventListener('dblclick', function (){
    todoContainer.removeChild(paragraph)
  })
})