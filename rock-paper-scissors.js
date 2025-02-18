console.log("Welcome to Rock, paper, scissors game.");



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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        function playRound(playerChoice, machineChoice) {

            if (playerChoice === machineChoice) {
                return console.log("It's a tie! No points added to any of the parties");
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

        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore === computerScore) {
        return console.log("No winners this game! It's a tie!");
    } else if (humanScore > computerScore) {
        return console.log("Congratulations! You won the Rock, Paper, Scissors game!");
    } else {
        return console.log("You lost the Rock, Paper, Scissors game. Better luck next time.");
    }




}

