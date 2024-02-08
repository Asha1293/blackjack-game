let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
   Name: "Asha",
   Chips: 250,
}



let playerEl = document.getElementById("player-el")

playerEl.textContent = player.Name + ": $" + player.Chips 

console.log(cards)

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*12 ) + 1


    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){

cardsEl.textContent = "Cards: "
for(let i=0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + "  "
}
    
    
    sumEl.innerText = "Sum: " + sum

    if( sum < 21){
        message = "Do you want to draw a new card? 😊"
        
    } else if(sum === 21)
    {
        message = "wohooo! You have got the blackjack 😍"
        hasBlackJack = true
    } else{
        message = "You are out of the game 😒"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard(){

    if( isAlive === true && hasBlackJack === false){
        let card= getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
    
}

//let randomNumber = Math.floor(Math.random() * 6)
//console.log(randomNumber)



function rollDice(){
    let randomNumber = Math.floor(Math.random()*6 ) + 1
    return randomNumber
}

console.log(rollDice())







//let age = 16
//if(age >= 21){
    //console.log("You can enter the club 😍😇")
//} else {
    //console.log("Sorry, You cannot enter the club 😭🫤")
//}

//let hasCompletedCourse = true
//let givesCertificate = true

//function generateCertificate(){
//    console.log("generating certificate....")
//}

//if( hasCompletedCourse === true && givesCertificate === true){
//    generateCertificate()
//}