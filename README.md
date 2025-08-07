# Rock, Paper, Scissors Game

## 🔗 [**Live Demo**](https://orianaland.github.io/Paper-Rock-Scissors/)

This is a simple implementation of the classic game **Rock Paper Scissors**, built as part of [The Odin Project](https://www.theodinproject.com/) curriculum. The game features a graphical user interface (GUI) where players can click buttons to make their choice. The project demonstrates core JavaScript concepts such as functions, event handling, DOM manipulation, and basic game logic.

## Features

- **Interactive Gameplay**: Players can click buttons to select their choice (Rock, Paper, or Scissors).
- **Score Tracking**: The game keeps track of the player's and computer's scores.
- **Best of 5 Rounds**: The first to reach 5 points wins the game.
- **Responsive Design**: The game is designed to work on both desktop and mobile devices.

## Technologies Used

- **HTML**: Used to create a basic structure for the project.
- **JavaScript**: Used to implement the game logic, including random choice generation, score tracking, and result determination.
- **Git**: For version control and project management.

## How to Play

1. Clone the repository or download the source code.
2. Open the `index.html` file in your browser.
3. Click on the **Rock**, **Paper**, or **Scissors** buttons to make your choice.
4. The game will display the result of each round and update the score.
5. The first player to reach 5 points wins the game.

## Code Example

Here's a snippet of the core game logic:

```javascript
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
```
