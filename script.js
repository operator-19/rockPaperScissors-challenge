const getComputerChoice = () => {
    // define choices
    const choices = ["rock", "paper", "scissors"];
    
    // generate random number 0 - 2
    const randomChoice = Math.floor(Math.random() * 3)

    return(choices[randomChoice])
}


const playRound = (playerSelection, computerSelection) => {
// Check if the player's choice beats the computer's choice
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  // Check if the computer's choice beats the player's choice
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  // Otherwise, it's a tie
  } else {
    return `It's a Tie! Both chose ${playerSelection}`;
  }
}

// Write a NEW function called game(). Call the playRound function inside
const game = () => {
    let playerScore = 0;
    let computerScore = 0;

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i}:`);

    // Prompt the player for their choice
    let playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

    // Call computerPlay() to generate the computer's move
    let computerSelection = getComputerChoice();

    // Call playRound() to determine the winner of the round
    let roundResult = playRound(playerSelection, computerSelection);

    // Update the scores and display the round result
    if (roundResult === `You Win! ${playerSelection} beats ${computerSelection}`) {
      playerScore++;
    } else if (roundResult === `You Lose! ${computerSelection} beats ${playerSelection}`) {
      computerScore++;
    }
    console.log(roundResult);
  }

  // Display the final scores and declare the winner or loser
  console.log(`Final score: Player ${playerScore} - ${computerScore} Computer`);
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is tied!");
  }
}

game()