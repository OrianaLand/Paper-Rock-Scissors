console.log("Rock, paper, scissors.");

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    while (true) {
        const userChoice = prompt("Enter your choice (1 for Rock, 2 for Paper, 3 for Scissors):");

        // Convert to number and check if it's 1, 2, or 3
        const choice = parseInt(userChoice);

        if (choice === 1 || choice === 2 || choice === 3) {
            return choice;
        }

        alert("Invalid choice. Please enter 1, 2, or 3.");
    }
}

let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
