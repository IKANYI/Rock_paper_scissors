const computerDisplay = document.getElementById("computerDisplay");
const playerDislay = document.getElementById("playerDisplay");
const choices = ["rock", "paper", "scissors"]
const emojis = {
  'rock': '✊🏽',
  'paper': '✋🏽',
  'scissors': '✌🏽'
};
const resutDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


const defaultChoice = 'scissors';
  document.getElementById('playerDisplay').textContent = `${emojis[defaultChoice]}`;
  document.getElementById('computerDisplay').textContent = ` ${emojis[defaultChoice]}`;
  document.getElementById('resultDisplay').textContent = 'DRAW';

  

function playGame(playerChoice) {

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  //console.log(computerChoice);
  
  let result = "";

  if (playerChoice === computerChoice){
    result = "Draw";
  }
    else{
      switch(playerChoice){
        case "rock":
        result =  (computerChoice === "scissors") ? "Player Win" : "Computer Win";
        break;
        case "paper":
          result =  (computerChoice === "rock") ?  "Player Win" : "Computer Win";
          break;
          case "scissors":
            result =  (computerChoice === "paper") ?  "Player Win" : "Computer Win";
            break;  
      }
    }
    playerDislay.textContent = ` ${emojis[playerChoice]}`;
    computerDisplay.textContent = ` ${emojis[computerChoice]}`;
    resutDisplay.textContent = result;

    switch (result) {
      case "Player Win":
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
      case "Computer Win":
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
  }
   





  window.playGame = playGame;
