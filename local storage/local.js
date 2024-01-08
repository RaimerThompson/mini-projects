//create a button that adds 1 to a botscore in local storage

if (!localStorage.getItem('botScore')){
  localStorage.setItem('botScore', 0)

}


document.querySelector('button').addEventListener('click', addAnothaOne)  

function addAnothaOne(){
  let botScoreVal = Number(localStorage.getItem('botScore'))

  botScoreVal += 1

  localStorage.setItem('botScore', botScoreVal)
  
}

//create card game WAR
//two player game where both players draw cards and the one with the highest value card wins, if theres a tie then declare war and put up 3 cards and flip the 4th and take all the cards.

let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
    console.log(data)
    deckId = data.deck_id

    })
    .catch(err =>{
      console.log(`error ${err}`)
    })


document.querySelector('button').addEventListener('click', drawTwo)  

function drawTwo(){
  let url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`


  fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image
    let player1Val = convertToNum(data.cards[0].value)
    let player2Val = convertToNum(data.cards[1].value)

    if (player1Val > player2Val){
      document.querySelector('h3').innerText = 'Player 1 wins'
    } else if (player1Val < player2Val){
      document.querySelector('h3').innerText = 'Player 2 wins'
    } else{
      document.querySelector('h3').innerText = 'Time for War'
    }

    })
    .catch(err =>{
      console.log(`error ${err}`)
    })

}


function convertToNum(val){
  if (val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13  
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  } else{
    return Number(val)
  }
}