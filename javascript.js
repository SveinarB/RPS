const rock = "rock"
const paper = "paper"
const scissors = "scissors"
const tie = "It's a tie, go again!"
const computerWin = "Computer wins this round, too bad!"
const playerWin = "Good job, you won!"

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3) + 1;
    if(computerChoice === 1) {
        return rock;
    } else if(computerChoice === 2) {
        return paper;
    } else {
        return scissors;
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection) {
        return tie;
    } else if(
    (computerSelection === rock && playerSelection === scissors) ||
    (computerSelection === paper && playerSelection === rock) ||
    (computerSelection === scissors && playerSelection === paper)) {
        return computerWin;
    } else {
        return playerWin;
    }
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));