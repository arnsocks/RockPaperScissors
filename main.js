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

function getHumanChoice() { // Ask the human for their choice
  let choice = '';
  let input = prompt("Rock, Paper, or Scissors?", '');
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

function playGame(numRounds) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < numRounds; i++) {
      playRound();
  }

  function playRound(){
    
    const humanChoice = getHumanChoice();
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
        return (computerPick === 'Scissors') ? 'human' : 'computer';
      } else if (humanPick === 'Paper') {
        return (computerPick === 'Rock') ? 'human' : 'computer';
      } else if (humanPick === 'Scissors') {
        return (computerPick === 'Paper') ? 'human' : 'computer';
      } 
    }
  }
}

playGame(5);