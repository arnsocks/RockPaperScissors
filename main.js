console.log("Hello from the main.js");
console.log("Rock" == "rock");

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

  choice = input;
  return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());