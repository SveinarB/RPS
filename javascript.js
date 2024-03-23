const rock = "rock"
const paper = "paper"
const scissors = "scissors"
const tie = "It's a tie, go again!"
const computerWin = "Computer wins this round, too bad!"
const playerWin = "Good job, you won!"

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3) + 1;
    if(computerChoice === 1) {
        computerChoice = rock;
    } else if(computerChoice === 2) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    }
    console.log(computerChoice);
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection) {
        tie;
    } else if(
    (computerSelection === rock && playerSelection === scissors) ||
    (computerSelection === paper && playerSelection === rock) ||
    (computerSelection === scissors && playerSelection === paper)) {
        computerWin;
    } else {
        playerWin;
    }
}


const playerSelection = rock;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));