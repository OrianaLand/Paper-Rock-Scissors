console.log("Rock, paper, scissors.");

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    while (true) {
        let userChoice = prompt("Enter your choice (Rock, Paper or Scissors):");

        //Make variable case-insensitive
        userChoice = userChoice.toLowerCase();

        let choice = undefined;
        //Give the choice a numeric value according to userChoice
        switch (true) {
            case userChoice === "rock":
                choice = 1;
                return choice;
            case userChoice === "paper":
                choice = 2;
                return choice;
            case userChoice === "scissors":
                choice = 3;
                return choice;
        }

        alert("Invalid choice. Please enter Rock, Paper or Scissors.");
    }
}

let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
