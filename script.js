import {startConfetti, stopConfetti, removeConfetti} from "./confetti.js";


const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// Reset of selected icons
function resetSelected(){
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

// Reset Score & playerChoice/computerChoice
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerChoiceEl.textContent = '';
  playerScoreEl.textContent = `${playerScoreNumber}`;
  
  computerChoiceEl.textContent = '';
  computerScoreEl.textContent = `${computerScoreNumber}`;
  resultText.textContent = '';

  resetSelected();
}

// Random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.round(Math.random() * 4 + 1);
  if(computerChoiceNumber === 1){
    computerChoice = 'rock';
  } else if(computerChoiceNumber === 2){
    computerChoice = 'paper';
  } else if(computerChoiceNumber === 3){
    computerChoice = 'scissors';
  } else if(computerChoiceNumber === 4){
    computerChoice = 'lizard';
  } else if(computerChoiceNumber === 5){
    computerChoice = 'spock';
  }
}

// Add 'selected' styling and computerChoice
function displayComputerChoice(){
  switch (computerChoice){
    case 'rock': computerRock.classList.add('selected');
                 computerChoiceEl.textContent = ' --- Rock';
                 break;

    case 'paper': computerPaper.classList.add('selected');
                 computerChoiceEl.textContent = ' --- Paper';
                 break;

    case 'scissors': computerScissors.classList.add('selected');
                 computerChoiceEl.textContent = ' --- Scissors';
                 break;

   case 'lizard': computerLizard.classList.add('selected');
                 computerChoiceEl.textContent = ' --- Lizard';
                 break;

    case 'spock': computerSpock.classList.add('selected');
                 computerChoiceEl.textContent = ' --- Spock';
                 break;
    
    default: break;
  }
}

// Update the score and resultText
function updateScore(playerChoice){
  if(playerChoice === computerChoice){
    resultText.textContent = "It's a tie!";
    resultText.style.color = "black";
  } else{
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if(choice.defeats.indexOf(computerChoice) != -1){
      startConfetti();
      playerScoreNumber += 1;
      playerScoreEl.textContent = `${playerScoreNumber}`;
      resultText.textContent = "You Won!";
      resultText.style.color = 'green';
    } else{
      computerScoreNumber += 1;
      computerScoreEl.textContent = `${computerScoreNumber}`;
      resultText.textContent = "You Lose!";
      resultText.style.color = 'red';
    }
  }
}

// Call functions to process turn
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice){
  checkResult(playerChoice);
  // Add 'selected' styling and  playerChoice
  switch (playerChoice){
    case 'rock': playerRock.classList.add('selected');
                 playerChoiceEl.textContent = ' --- Rock';
                 break;

    case 'paper': playerPaper.classList.add('selected');
                 playerChoiceEl.textContent = ' --- Paper';
                 break;

    case 'scissors': playerScissors.classList.add('selected');
                 playerChoiceEl.textContent = ' --- Scissors';
                 break;

   case 'lizard': playerLizard.classList.add('selected');
                 playerChoiceEl.textContent = ' --- Lizard';
                 break;

    case 'spock': playerSpock.classList.add('selected');
                 playerChoiceEl.textContent = ' --- Spock';
                 break;
    
    default: break;
  }
}

window.select = select;
window.resetAll = resetAll;

// On Load
resetAll();