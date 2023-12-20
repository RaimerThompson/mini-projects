let input = document.querySelector('.input')
let addBtn = document.querySelector('.add')
let todoContainer = document.querySelector('.todos')



addBtn.addEventListener('click', function(){
  let paragraph = document.createElement('p')
  paragraph.classList.add('style')
  paragraph.innerText = input.value
  input.value= ''
  todoContainer.appendChild(paragraph)
  paragraph.addEventListener('click', function (){
    paragraph.style.textDecoration= 'line-through'
  })
  paragraph.addEventListener('dblclick', function (){
    todoContainer.removeChild(paragraph)
  })
})