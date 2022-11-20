const comp = document.querySelector('#computerChoice') 
const player = document.querySelector('#playerChoice')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button') //class of button req?
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    player.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber === 1){
        computerChoice = "rock"

    }
    if(randomNumber === 2){
        computerChoice = "paper"

    }
    if(randomNumber === 3){
        computerChoice = "scissors"

    }
    comp.innerHTML = computerChoice
}

function getResult(){
    if (playerChoice === computerChoice) {
        result =  " It's a draw"
    }
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        result =  " You win!!!"
    }
    if (playerChoice === 'scissors' && computerChoice === 'rock') {
        result =  " You lost"
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        result =  " You win!!!"
    }
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        result =  " You win!!!"
    }
    if (playerChoice === 'paper' && computerChoice === 'scissors') {
        result =  " You lose"
    }
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        result =  " You lose"
    }
    resultDisplay.innerHTML = result
}