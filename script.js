let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("playerChoice").textContent = "You: " + playerChoice;
  document.getElementById("computerChoice").textContent = "Computer: " + computerChoice;

  let result = "";
  let resultClass = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie 🤝";
    ties++;
    resultClass = "tie";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win 🎉";
    wins++;
    resultClass = "win";
  } else {
    result = "You lose 😢";
    losses++;
    resultClass = "lose";
  }

  const resultText = document.getElementById("resultText");
  resultText.textContent = result;
  resultText.className = resultClass;

  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("ties").textContent = ties;
}

function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;

  document.getElementById("wins").textContent = 0;
  document.getElementById("losses").textContent = 0;
  document.getElementById("ties").textContent = 0;

  document.getElementById("playerChoice").textContent = "You: -";
  document.getElementById("computerChoice").textContent = "Computer: -";

  const resultText = document.getElementById("resultText");
  resultText.textContent = "Make your move!";
  resultText.className = "";
}