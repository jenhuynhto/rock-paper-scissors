function getComputerChoice() {
    let action = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (action == 1) {
        return "Rock";
    }
    else if (action == 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection){
    let playerUP = playerSelection.toUpperCase();
    let computerUP = computerSelection.toUpperCase();
    var winner = "";

    if (playerUP == "ROCK" && computerUP == "SCISSORS"){
        winner = "Player";
        playerScore++;
        // return "You win! Rock beats Scissors";
    }
    else if (playerUP == "ROCK" && computerUP == "ROCK"){
        winner = "No One";
        // return "You tie! Rock equals Rock";
    }
    else if (playerUP == "ROCK" && computerUP == "PAPER"){
        winner = "Computer";
        computerScore++;
        // return "You lose! Paper beats Rock";
    }
    else if (playerUP == "PAPER" && computerUP == "ROCK"){
        winner = "Player";
        playerScore++;
        // return "You win! Paper beats Rock";
    }
    else if (playerUP == "PAPER" && computerUP == "PAPER"){
        winner = "No One";
        //return "You tie! Paper equals Paper";
    }
    else if (playerUP == "PAPER" && computerUP == "SCISSORS"){
        winner = "Computer";
        computerScore++;
        // return "You lose! Scissors beats Paper";
    }
    else if (playerUP == "SCISSORS" && computerUP == "PAPER"){
        winner = "Player";
        playerScore++;
        // return "You win! Scissors beats Paper";
    }
    else if (playerUP == "SCISSORS" && computerUP == "SCISSORS"){
        winner = "No One";
        // return "You tie! Scissors equals Scissors";
    }
    else if (playerUP == "SCISSORS" && computerUP == "ROCK"){
        winner = "Computer";
        computerScore++;
        // return "You lose! Rock beats Scissors";
    }

    document.getElementById("roundWinner").innerHTML = winner;
    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = computerScore;

    if (playerScore == 5){
        document.getElementById("gameWinner").innerHTML = "Player";
        return;
    }
    if (computerScore == 5){
        document.getElementById("gameWinner").innerHTML = "Computer";
        return;
    }
}