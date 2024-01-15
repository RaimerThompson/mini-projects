document.querySelector('button').addEventListener('click', getFetch)
// have local storage show item on page load
document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.openlibrary.org/isbn/${choice}.json`


  fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log(data.title)
      if (!localStorage.getItem('books')){
        localStorage.setItem('books', data.title)
      }else{
        let books = localStorage.getItem('books') + " ; " + data.title
        localStorage.setItem('books', books)
      }
    //put title into local storage
  
    document.querySelector('h2').innerText = localStorage.getItem('books')
    })
    .catch(err =>{
      console.log(`error ${err}`)
    })


}
