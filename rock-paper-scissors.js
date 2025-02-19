let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    //Give choice an equivalent value according to computerChoice numeric value
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playGame() {

    let computerSelection;
    let resultShowed = false; /* This variable is set to false because the final result hasn't been printed */

    function playRound(playerChoice, machineChoice) {

        if (playerChoice === machineChoice) {
            alert("This round was a tie. No points added to either score");
            return;
        }

        switch (playerChoice) {
            case "rock":
                if (machineChoice === "paper") {
                    computerScore += 1;
                    break;
                }
                humanScore += 1;
                break;

            case "paper":
                if (machineChoice === "scissors") {
                    computerScore += 1;
                    break;
                }
                humanScore += 1;
                break;

            case "scissors":
                if (machineChoice === "rock") {
                    computerScore += 1;
                    break;
                }
                humanScore += 1;
                break;
        }

    }

    const container = document.createElement("div");
    container.id = "container";
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";

    document.body.append(container, resultDiv);

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    rockBtn.id = "rock";

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    paperBtn.id = "paper";

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.id = "scissors";

    container.append(rockBtn, paperBtn, scissorsBtn);

    const liveScore = document.createElement("p");
    resultDiv.append(liveScore);


    container.addEventListener("click", (event) => {

        if (humanScore < 5 && computerScore < 5) {
            let target = event.target;

            switch (target.id) {
                case 'rock':
                    computerSelection = getComputerChoice();
                    playRound("rock", computerSelection);
                    liveScore.textContent = "| Human: " + humanScore + " | -- | Computer: " + computerScore + " |";
                    break;
                case 'paper':
                    computerSelection = getComputerChoice();
                    playRound("paper", computerSelection);
                    liveScore.textContent = "| Human: " + humanScore + " | -- | Computer: " + computerScore + " |";
                    break;
                case 'scissors':
                    computerSelection = getComputerChoice();
                    playRound("scissors", computerSelection);
                    liveScore.textContent = "| Human: " + humanScore + " | -- | Computer: " + computerScore + " |";
                    break;
            }
        }
        /* Stops printing the final result when the event listener fires after the game has a winner */
        if ((humanScore === 5 || computerScore === 5) && (!resultShowed)) {
            if (humanScore > computerScore) {
                liveScore.innerHTML += "<br>Human wins!";

            } else {
                liveScore.innerHTML += "<br>Computer wins!";
            }
            resultShowed = true;
        }
    })

}

playGame();



