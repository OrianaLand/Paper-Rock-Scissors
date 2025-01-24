console.log("Rock, paper, scissors.");

let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

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
            if (machineChoice === "paper") {
                computerScore += 1;
                return console.log("Paper beats Rock. You lose!");
            }

            humanScore += 1;
            return console.log("Rock beats Scissors. You win!");

        case "paper":
            if (machineChoice === "scissors") {
                computerScore += 1;
                return console.log("Scissors beats Paper. You lose!");
            }

            humanScore += 1;
            return console.log("Paper beats Rock. You win!");

        case "scissors":
            if (machineChoice === "rock") {
                computerScore += 1;
                return console.log("Rock beats Scissors. You lose!");
            }

            humanScore += 1;
            return console.log("Scissors beats Paper. You win!");
    }

}

