
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const selection = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * selection.length);
    return selection[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "loser";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "winner";
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return "draw";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "loser";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "winner";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "draw";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "loser";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "winner";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "draw";
    }
    else {
        return "wrong"
    }
}

const displayResult = document.querySelector('.result');
const currentScore = document.querySelector('.current-score');
const buttons = document.querySelectorAll('buttons');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playAgain = document.querySelector('.play-again')

function scoreCheck() {
    if (playerWins == 5) {
        displayResult.textContent = "You won!";
        endGame();        
    } else if (computerWins == 5) {
        displayResult.textContent = "You lost!";
        endGame(); 
    }
}

function endGame() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result == "winner") {
        displayResult.textContent = "You win! " + playerSelection + " beat " + computerSelection + ".";
        playerWins++;
    }
    else if (result == "loser") {
        displayResult.textContent = "You lose! " + computerSelection + " beat " + playerSelection + ".";
        computerWins++;
    }
    else if (result == "draw") {
        displayResult.textContent = "Draw!";
    }
    else {
        displayResult.textContent = "Wrong input!";
    }

    currentScore.textContent = "Score is You " + playerWins + " : " + computerWins + "  Computer.";

    scoreCheck();
}

rockBtn.addEventListener('click', () => game("rock"));
paperBtn.addEventListener('click', () => game("paper"));
scissorsBtn.addEventListener('click', () => game("scissors"));
