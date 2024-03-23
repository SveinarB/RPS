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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for(let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (rock, paper or scissors): ").toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(`Round ${round}:`);
        console.log(`Player chooses: ${playerSelection}`);
        console.log(`Computer chooses: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result === playerWin) {
            playerScore++
        } else if (result === computerWin) {
            computerScore++
        }
    }

    console.log("\nGame over!\n");
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Sorry! Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();