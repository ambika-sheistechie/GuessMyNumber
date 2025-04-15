'use strict';

let levelConfig = {
  easy: { max: 10, attempts: 10 },
  medium: { max: 50, attempts: 7 },
  hard: { max: 100, attempts: 5 },
};

let currentLevel = Object.keys(levelConfig)[0];
let attempts = levelConfig.easy.attempts;

//Generate Random number | Math.random provides number from 0 to 1 but when you mutiply by 10, it gives number between 0.0 to 19.9999, and the trunc methods truncates all fractional part of number. Also, 1 is added to consider 20th number
let randomnum = Math.trunc(Math.random() * 10 + 1);

let score = 10,
  highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

if (currentLevel == 'easy') {
  document.querySelector('.check').addEventListener('click', function () {
    const guessVal = Number(document.querySelector('.guess').value);

    //check if enterted number is too low, too high and is equal to random number
    if (!guessVal) {
      displayMessage('No Number');
    } else if (guessVal == randomnum) {
      displayMessage('Woohooo! You won');
      document.querySelector(
        '.show-level-message'
      ).textContent = `✅ “You guessed it in ${
        Number(10) - attempts
      } out of 10 attempts! Great job! Ready for the next level?`;
      console.log(`${Number(10) - attempts}`);
      document.querySelector('.show-level-message').style.display = 'block';
      //Show the random number on UI
      document.querySelector('.number').textContent = randomnum;
      document.querySelector('body').style.backgroundColor = 'green';
      currentLevel = Object.keys(levelConfig)[1];

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guessVal !== randomnum) {
      if (score > 1 && attempts > 1) {
        displayMessage(guessVal > randomnum ? 'Too High' : 'Too Low!');
        score--;
        attempts--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.attempts').textContent = attempts;
      } else {
        displayMessage('You lost the game!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('.attempts').textContent = 0;
      }
    }
  });
}

//Reset the game functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  currentLevel = Object.keys(levelConfig)[0];
  document.querySelector('.score').textContent = 10;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  randomnum = Math.trunc(Math.random() * 10 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.show-level-message').textContent = '';
});
