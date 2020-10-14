const choices = document.querySelectorAll(".choice"); // like an array
const score = document.getElementById("score");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreBoard = {
  player: 0,
  computer: 0,
};

// play game
function play(e) {
  // console.log(e.target.id);
  restartBtn.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  //console.log(playerChoice, computerChoice);
  const winner = getWinner(playerChoice, computerChoice);
  //console.log(winner);
  showWinner(winner, computerChoice);
}

// Get computer choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Get  game winner
function getWinner(p, c) {
  if (p == c) {
    return "draw";
  } else if (p == "rock") {
    if (c == "paper") {
      return "Computer";
    } else {
      return "Player";
    }
  } else if (p == "paper") {
    if (c == "rock") {
      return "Player";
    } else {
      return "Computer";
    }
  } else {
    if (c == "paper") {
      return "Player";
    } else {
      return "Computer";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "Player") {
    //Inc player score
    scoreBoard.player++;
    //show modal result
    result.innerHTML = `
        <h1 class="text-win">You Win</h1>
              <i class="fas fa-hand-${computerChoice} fa-10x"></i>
              <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
  } else if (winner === 'Computer') {
      //Inc computer score
    scoreBoard.computer++;
    //show modal result
    result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
              <i class="fas fa-hand-${computerChoice} fa-10x"></i>
              <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
  } else {
    //show modal result
    result.innerHTML = `
        <h1>It's A Draw</h1>
              <i class="fas fa-hand-${computerChoice} fa-10x"></i>
              <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`;
  }
  // show score
  score.innerHTML = `
  <p>Player: ${scoreBoard.player}</p>
  <p>Computer: ${scoreBoard.computer}</p>`;

  modal.style.display = 'block';
}

// clear modal
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

// restart game
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
    <p> Player: 0</p>
    <p> Computer: 0</p>`;
}

// event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener('click', clearModal);
restartBtn.addEventListener('click', restartGame);