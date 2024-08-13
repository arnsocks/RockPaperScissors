console.log("Hello from the main.js");

function getComputerChoice() {
  // CREATE a variable call Choice
  // CREATE a random number between 0 and 2
  // if result is 0 choice is "Rock"
  // if result is 1 choice is "Paper"
  // if result is 2 choice is "Scissors"
  // RETURN choice

  let choice = '';
  let num = Math.floor(Math.random()*3);
  if (num == 0) {
    choice = "Rock";
  } else if (num == 1) {
    choice = "Paper";
  } else if (num == 2) {
    choice = "Scissors";
  } else {
    choice = "Something went wrong";
  }

  return choice;
}

function getHumanChoice() {
  // CREATE a variable called choice
  // PROMPT the player for their choice
  // RETURN the choice

  let choice = '';
  let input = prompt("Rock, Paper, or Scissors?", '');

  // TO DO: validate the input
  input = input.toLowerCase();
  if (input == 'rock') {
    choice = "Rock";
  } else if (input == 'paper') {
    choice = "Paper";
  } else if (input == 'scissors') {
    choice = "Scissors";
  } else {
    choice = "Invalid choice";
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  function determineWinner(humanPick, computerPick) {
    if (humanPick === computerPick) {
      return 'draw';
    } else if (humanPick === 'Rock') {
      return (computerPick === 'Scissors') ? 'human' : 'computer';
    } else if (humanPick === 'Paper') {
      return (computerPick === 'Rock') ? 'human' : 'computer';
    } else if (humanPick === 'Scissors') {
      return (computerPick === 'Paper') ? 'human' : 'computer';
    } 

  }

  let winner = determineWinner(humanChoice,computerChoice);

  if (winner == 'human') {
    humanScore ++;
    console.log("You won the round");
  } else if(winner == 'computer') {
    computerScore ++;
    console.log("You lost the round.");
  } else {
    console.log("The round was a draw.");
  }
  console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}`);
  console.log(`Computer: ${computerScore} | Human: ${humanScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);