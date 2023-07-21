function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3) + 1;

  return choices[randomIndex - 1];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "Tied!";
  } else if (player === "rock") {
    if (computer === "paper") {
      return "You lose! Paper beats Rock";
    } else if (computer === "scissors") {
      return "You win! Rock beats Scissors";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "You win! Paper beats Rock";
    } else if (player === "scissors") {
      return "You lose! Scissors beats Paper";
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      return "You lose! Rock beats Scissors";
    } else if (computer === "paper") {
      return "You win! Scissors beats Paper";
    }
  } else {
    return "Please, make a right choice!";
  }
}

// const playerSelection = "RocK";
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));
