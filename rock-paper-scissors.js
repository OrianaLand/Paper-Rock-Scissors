function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let resultShowed = false; /* This variable is set to false because the final result hasn't been printed */

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

    function playRound(playerChoice, machineChoice) {

        if (playerChoice === machineChoice) {
            return "Tie";
        }

        if (
            (playerChoice === "rock" && machineChoice === "scissors") ||
            (playerChoice === "paper" && machineChoice === "rock") ||
            (playerChoice === "scissors" && machineChoice === "paper")
        ) {
            humanScore++;
            return "Win";
        } else {
            computerScore++;
            return "Lose";
        }

    }

    function createButton(id, text, parent) {
        const button = document.createElement("button");
        button.id = id;
        button.textContent = text;
        parent.appendChild(button);
    }


    const container = document.createElement("div");
    container.id = "container";

    createButton("rock", "Rock", container);
    createButton("paper", "Paper", container);
    createButton("scissors", "Scissors", container);

    const resultDiv = document.createElement("div");
    resultDiv.id = "result";

    const liveScore = document.createElement("p");
    const choiceDisplay = document.createElement("p");
    const resultMessage = document.createElement("p");

    document.body.append(container, resultDiv);
    resultDiv.append(liveScore, choiceDisplay, resultMessage);



    container.addEventListener("click", (event) => {

        if (humanScore < 5 && computerScore < 5) {
            const target = event.target;
            const playerChoice = target.id;
            const computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);

            choiceDisplay.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice}`;
            liveScore.textContent = `| Human: ${humanScore} | -- | Computer: ${computerScore} |`;
        }
        /* Stops printing the final result when the event listener fires after the game has a winner */
        if ((humanScore === 5 || computerScore === 5) && (!resultShowed)) {
            if (humanScore > computerScore) {
                resultMessage.textContent = "Human wins!";

            } else {
                resultMessage.textContent = "Computer wins!";
            }
            resultShowed = true;
        }
    })

}

playGame();



