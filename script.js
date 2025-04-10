'use strict';
//Generate Random number | Math.random provides number from 0 to 1 but when you mutiply by 20, it gives number between 0.0 to 19.9999, and the trunc methods truncates all fractional part of number. Also, 1 is added to consider 20th number
let randomnum = Math.trunc(Math.random() * 20 + 1);

let score = 20,
  highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessVal = Number(document.querySelector('.guess').value);

  //check if enterted number is too low, too high and is equal to random number
  if (!guessVal) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guessVal == randomnum) {
    document.querySelector('.message').textContent = 'Woohooo! You won';
    //Show the random number on UI
    document.querySelector('.number').textContent = randomnum;
    document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessVal < randomnum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessVal > randomnum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Reset the game functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  randomnum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
});
