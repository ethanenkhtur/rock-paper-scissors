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
    } else if (computer === "scissors") {
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt();
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);

    if (result.substring(0, 1) === "T") {
      console.log("Player: " + playerScore + ", Computer: " + computerScore);
      continue;
    } else if (result.substring(0, 1) === "P") {
      i--;
      console.log("Player: " + playerScore + ", Computer: " + computerScore);
      continue;
    } else if (result.substring(4, 5) === "w") {
      playerScore++;
      console.log("Player: " + playerScore + ", Computer: " + computerScore);
    } else if (result.substring(4, 5) === "l") {
      computerScore++;
      console.log("Player: " + playerScore + ", Computer: " + computerScore);
    }
  }

  if (playerScore > computerScore) {
    console.log(
      "Game over! Player wins " + playerScore + " to " + computerScore + "!"
    );
  } else if (playerScore < computerScore) {
    console.log(
      "Game over! Computer wins " + computerScore + " to " + playerScore + "!"
    );
  } else {
    console.log(
      "Game over! Tied " + playerScore + " to " + computerScore + "!"
    );
  }
}
