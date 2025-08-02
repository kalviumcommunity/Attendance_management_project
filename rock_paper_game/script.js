let playerScore = 0;
let computerScore = 0;
let round = 0;

const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("#choices button");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round-count");
const resultMessage = document.getElementById("result-message");
const finalMessage = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-again");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (round >= 5) return;

    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getWinner(playerChoice, computerChoice);

    updateScore(result);
    round++;
    roundEl.textContent = round;
    displayResult(result, playerChoice, computerChoice);

    if (round === 5) {
      showFinalResult();
    }
  });
});

playAgainBtn.addEventListener("click", resetGame);

function getWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function updateScore(result) {
  if (result === "win") playerScore++;
  else if (result === "lose") computerScore++;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function displayResult(result, player, computer) {
  let msg = `You chose ${player}, computer chose ${computer}. `;
  if (result === "win") msg += "You won this round!";
  else if (result === "lose") msg += "You lost this round.";
  else msg += "It's a draw!";
  resultMessage.textContent = msg;
}

function showFinalResult() {
  playAgainBtn.style.display = "inline-block";
  if (playerScore > computerScore) {
    finalMessage.textContent = "🎉 Congratulations! You Won The Game!";
  } else if (computerScore > playerScore) {
    finalMessage.textContent = "😞 Game Over! Computer Wins The Game!";
  } else {
    finalMessage.textContent = "😐 It's a Tie Game! Try Again!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  roundEl.textContent = 0;
  resultMessage.textContent = "";
  finalMessage.textContent = "";
  playAgainBtn.style.display = "none";
}
