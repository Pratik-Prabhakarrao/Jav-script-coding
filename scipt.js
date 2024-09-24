'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;


const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no guess
  if (!guess) {
    displayMessage("👎 No number entered")
    // document.querySelector('.message').textContent = '👎 No number entered';
  } 
  //correct guess
  else if (guess === secretNumber) {

    displayMessage('😃 Correct Number')
    // document.querySelector('.message').textContent = '😃 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').style.width = '30rem'

    if(score>highScore){
      highScore = score
      document.querySelector(".higscore").textContent = highScore ;
    }


  } 
  //guess is less

  else if(guess!== secretNumber ){
    if (score >1) {
      document.querySelector('.message').textContent = guess>secretNumber?'📈 too High':'📉 too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have lost the game')
      // document.querySelector('.message').textContent = 'You have lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = "";
      document.querySelector('.number').textContent = secretNumber;

    }
  }
  // else if (guess < secretNumber) {
   
  // } 
  //guess is bigger
  // else if (guess > secretNumber) {
  //   if (score >1) {
  //     document.querySelector('.message').textContent = '📈 too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You have lost the game';
  //     document.querySelector('.score').textContent = 0;
 
  //   }
  // }

document.querySelector('.again').addEventListener('click', function(){
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;


displayMessage('Start Guessing.....')

document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = "?";
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222'



})

});
