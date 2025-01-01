const rockBtn = document.querySelector('.rock-button');
const papperBtn = document.querySelector('.papper-button');
const scissorsBtn = document.querySelector('.scissors-button');
const wins = document.querySelector('.score-win');
const losses = document.querySelector('.score-lose');
const ties = document.querySelector('.score-tie');
const moves = document.querySelector('.moves');

let computerPick = '';
let playerPick = '';
let result = '';
let score = {
  ties: 0,
  wins: 0,
  losses: 0,
};

function compMove() {
  const computerMove = Math.random().toFixed(2);

  if (computerMove < 0.33) {
    computerPick = 'Rock';
    return computerPick;
  } else if (computerMove > 0.33 && computerMove < 0.66) {
    computerPick = 'Papper';
    return computerPick;
  } else if (computerMove > 0.66) {
    computerPick = 'Scissors';
    return computerPick;
  }

  return computerPick;
}

function playGameRock() {
  compMove();
  playerPick = 'Rock';

  if (computerPick === 'Rock') {
    score.ties = score.ties + 1;
    result = 'Tie';
  } else if (computerPick === 'Papper') {
    score.losses = score.losses + 1;
    result = 'Lose';
  } else if (computerPick === 'Scissors') {
    score.wins = score.wins + 1;
    result = 'Win';
  }

  wins.textContent = `Wins: ${score.wins}`;
  losses.textContent = `Losses: ${score.losses}`;
  ties.textContent = `Ties: ${score.ties}`;

  moves.textContent = `Player Pick: ${playerPick} --- Computer Pick: ${computerPick} --- ${result}`;
}

function playGamePapper() {
  compMove();
  playerPick = 'Papper';

  if (computerPick === 'Papper') {
    score.ties = score.ties + 1;
    result = 'Tie';
  } else if (computerPick === 'Scissors') {
    score.losses = score.losses + 1;
    result = 'Lose';
  } else if (computerPick === 'Rock') {
    score.wins = score.wins + 1;
    result = 'Win';
  }

  wins.textContent = `Wins: ${score.wins}`;
  losses.textContent = `Losses: ${score.losses}`;
  ties.textContent = `Ties: ${score.ties}`;

  moves.textContent = `Player Pick: ${playerPick} --- Computer Pick: ${computerPick} --- ${result}`;
}

function playGameScissors() {
  compMove();
  playerPick = 'Scissors';

  if (computerPick === 'Scissors') {
    score.ties = score.ties + 1;
    result = 'Tie';
  } else if (computerPick === 'Rock') {
    score.losses = score.losses + 1;
    result = 'Lose';
  } else if (computerPick === 'Papper') {
    score.wins = score.wins + 1;
    result = 'Win';
  }

  wins.textContent = `Wins: ${score.wins}`;
  losses.textContent = `Losses: ${score.losses}`;
  ties.textContent = `Ties: ${score.ties}`;

  moves.textContent = `Player Pick: ${playerPick} --- Computer Pick: ${computerPick} --- ${result}`;
}

rockBtn.addEventListener('click', playGameRock);
papperBtn.addEventListener('click', playGamePapper);
scissorsBtn.addEventListener('click', playGameScissors);
