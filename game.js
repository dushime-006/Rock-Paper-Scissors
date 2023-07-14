// Function to generate computer's choice
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }
  
  // Function to play a round of the game
  function playRound(playerSelection, computerSelection) {
    // Converting both choices to lowercase for case-insensitive comparison
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
  
    // Checking for a draw
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
  
    // Checking for different game outcomes
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  // Function to play the game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 3; i++) {
      const playerSelection = prompt("Choose rock, paper, or scissors:");
      const computerSelection = computerPlay();
  
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(`Round ${i + 1}: ${roundResult}`);
  
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      } else {
        // It's a tie, so no score update
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  // Function to generate computer's choice
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }
  
  // Function to play a round of the game
  function playRound(playerSelection, computerSelection) {
    // Converting both choices to lowercase for case-insensitive comparison
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
  
    // Checking for a draw
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
  
    // Checking for different game outcomes
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  // Function to play the game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 3; i++) {
      const playerSelection = prompt("Choose rock, paper, or scissors:");
      const computerSelection = computerPlay();
  
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(`Round ${i + 1}: ${roundResult}`);
  
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      } else {
        // It's a tie, so no score update
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  game();