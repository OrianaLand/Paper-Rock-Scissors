console.log("Rock, paper, scissors.");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let choice = undefined;
    //Give choice an equivalent value according to userChoice numeric value
    switch (true) {
        case computerChoice === 1:
            choice = "rock";
            return choice;
        case computerChoice === 2:
            choice = "paper";
            return choice;
        case computerChoice === 3:
            choice = "scissors";
            return choice;
    }
}

function getHumanChoice() {
    while (true) {
        let userChoice = prompt("Enter your choice (Rock, Paper or Scissors):");

        //Make variable case-insensitive and check if userChoice is rock, paper or scissors.
        userChoice = userChoice.toLowerCase();

        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            return userChoice;
        }

        alert("Invalid choice. Please enter Rock, Paper or Scissors.");
    }
}

function playRound(playerChoice, machineChoice) {

    if (playerChoice === machineChoice) {
        return "It's a tie!";
    }

    switch (playerChoice) {
        case "rock":
            return (machineChoice === "paper") ? "Paper beats Rock. You lose!" : "Rock beats Scissors. You win!";
        case "paper":
            return (machineChoice === "scissors") ? "Scissors beats Paper. You lose!" : "Paper beats Rock. You win!";
        case "scissors":
            return (machineChoice === "rock") ? "Rock beats Scissors. You lose!" : "Scissors beats Paper. You win!";
    }

}

let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
