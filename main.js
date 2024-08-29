const buttons = document.querySelectorAll('.gameButton');
const results = document.querySelector("#results");
const humanScoreBoard = document.querySelector("#human-score");
const compScoreBoard = document.querySelector("#comp-score");

let humanScore = 0;
let computerScore = 0;

const result = document.createElement('p');
const choices = document.createElement('p');

setupGame();

function setupGame() {
  //Reset all the scores and messages
  humanScore = 0;
  computerScore = 0;
  humanScoreBoard.textContent = humanScore;
  compScoreBoard.textContent = computerScore;
  result.textContent = '';
  choices.textContent = '';

  //Remove everything from the results div
  while(results.firstChild) {
    results.removeChild(results.firstChild);
  }

  //Put the round result elements back in
  results.appendChild(result);
  results.appendChild(choices);

  for (button of buttons) {
    button.addEventListener('click', playRound);
  }
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

  choices.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}`;

  if (humanScore > 4 || computerScore > 4) {
    announceWinner(winner);
  }

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

function announceWinner(winner) {
  let message = winner === 'human' ? "You won the match!" : "Sorry, the computer won the match.";

  const gameOver = document.createElement('p');
  gameOver.textContent = message;
  results.appendChild(gameOver);

  for (button of buttons) {
    button.removeEventListener('click', playRound);
  }
  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = "Play Again?";
  results.appendChild(newGameBtn);

  newGameBtn.addEventListener('click', setupGame);
}