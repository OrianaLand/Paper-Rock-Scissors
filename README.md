# Rock, Paper, Scissors Game

This is a simple console-based Rock, Paper, Scissors game built using JavaScript. The game allows a human player to compete against the computer in a best-of-five series. The project was developed as part of The Odin Project curriculum to practice basic JavaScript concepts, including functions, loops, and conditional statements.

## Features

- **Interactive Gameplay**: The game prompts the user to input their choice (Rock, Paper, or Scissors) and then compares it with the computer's randomly generated choice.
- **Score Tracking**: The game keeps track of the scores for both the human player and the computer across five rounds.
- **Case-Insensitive Input**: The game accepts user input in any case (e.g., "rock", "ROCK", "rOcK") and processes it correctly.
- **Result Announcement**: After five rounds, the game announces the overall winner or if the game ended in a tie.

## Technologies Used

- **HTML**: Used to create a basic structure for the project.
- **JavaScript**: Used to implement the game logic, including random choice generation, score tracking, and result determination.

## How to Play

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Open the browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I`).
4. Follow the prompts in the console to play the game.

## Code Example

Here's a snippet of the core game logic:

```javascript
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