const buttons = document.querySelectorAll('button');
const results = document.querySelector("#results");
const humanScoreBoard = document.querySelector("#human-score");
const compScoreBoard = document.querySelector("#comp-score");

let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

const result = document.createElement('p');
const choices = document.createElement('p');
results.appendChild(result);
results.appendChild(choices);

setupGame();

function setupGame() {
  humanScore = 0;
  computerScore = 0;
  roundNum = 1;
  result.textContent = '';
  choices.textContent = '';



}

function getComputerChoice() { 
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
    result.textContent = "You win the round!";
  } else if(winner == 'computer') {
    computerScore ++;
    result.textContent = "The Computer wins the round!";
  } else {
    result.textContent = "Draw!";
  }

  humanScoreBoard.textContent = humanScore;
  compScoreBoard.textContent = computerScore;

  choices.textContent = `The computer chose ${computerChoice} and you chose ${humanChoice}`;

  
  roundNum++;

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