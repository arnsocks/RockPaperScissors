const buttons = document.querySelectorAll('button');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { // Have the computer randomly select a choice
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

for (button of buttons) {
  button.addEventListener('click', playRound);
}

function playRound(){
  const humanChoice = this.id;
  const computerChoice = getComputerChoice();
  let winner = determineWinner(humanChoice, computerChoice);

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

  function determineWinner(humanPick, computerPick) { //Figure out the result of the round
    if (humanPick === computerPick) { // if the picks are the same then it's always a draw
      return 'draw';
    } else if (humanPick === 'Rock') {
      return (computerPick === 'Scissors') ? 'human' : 'computer'; // Rock beats Scissors
    } else if (humanPick === 'Paper') {
      return (computerPick === 'Rock') ? 'human' : 'computer'; // Paper beats Rock
    } else if (humanPick === 'Scissors') {
      return (computerPick === 'Paper') ? 'human' : 'computer'; // Scissors beats Paper
    } 
  }
}