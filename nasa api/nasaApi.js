class MakeNetflixTVShows{
  constructor(title, genre, rating, numOfEp){
    this.title = title
    this.genre = genre
    this.rating = rating
    this.numOfEp = numOfEp
  }

  play(){
    console.log('playing...')
  }
  stop(){
    console.log('stopping...')
  }
  saveToList(){
    console.log('saves to my list /...')
  }
}

let bridgerton = new MakeNetflixTVShows('Bridgerton', 'Romance', '99%', '8')



document.querySelector('button').addEventListener('click', getFetch)  

function getFetch(){

  let choice = document.querySelector('input').value
  let url = `https://api.nasa.gov/planetary/apod?api_key=G0m3JlqFKQeAGOVjmguXYUHrM0PcUyQe6Vz9Zt7N&date=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    if (data.media_type === 'image'){
      document.querySelector('img').src = data.hdurl
    }else if (data.media_type === 'video'){
      document.querySelector('iframe').src = data.url
    }
  
    document.querySelector('h3').innerText = data.explanation
    })
    .catch(err =>{
      console.log(`error ${err}`)
    });
}