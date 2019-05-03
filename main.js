'using-strict';

const LOSS = '1,2,3';
const WIN = '4,5,6';
const INITIAL_TRANSFORM_STATE = 'idle'

var roll = function() {
  let sides = 6;
  return Math.floor(sides * Math.random()) + 1;
};

const view = {
  roll: document.getElementById('roll'),
  dice1: {o: document.querySelector('.dice-one'), state: INITIAL_TRANSFORM_STATE},
  dice2: {o: document.querySelector('.dice-two'), state: INITIAL_TRANSFORM_STATE},
  dice3: {o: document.querySelector('.dice-three'), state: INITIAL_TRANSFORM_STATE},
  score: document.querySelector('.score'),
  updateDice: function(results) {
    this.dice1.o.style.animation = "spin 0.8s linear 1";
    this.dice2.o.style.animation = "spin 0.8s linear 1";
    this.dice3.o.style.animation = "spin 0.8s linear 1";

    setTimeout(()=>{
      this.dice1.o.classList.add('show-top');
    },820)
  },
  updateScore: function(message) {
    this.score.textContent = message;
  },
};

const game = {
  turn: function() {
    let rollResult = [roll(), roll(), roll()];
    let resultSorted = [...rollResult].sort(); // sort results and return new array
    view.updateDice(rollResult);
    // view.updateScore(this.getScore(resultSorted));
  },
  getScore: function(results) {
    let message = '';
    if (results.toString() === WIN) {
      message = `${WIN} You Win!`;
    } else if (results.toString() === LOSS) {
      message = `${LOSS} You Lose`;
    } else if (results[0] === results[1] && results[1] === results[2]) {
      message = `Trips! ${results[0]}`;
    } else if (results[0] === results[1]) {
      message = `You scored: ${results[2]}`;
    } else if (results[1] === results[2]) {
      message = `You scored: ${results[0]}`;
    } else {
      message = 'Roll again...';
    }
    return message;
  },
};

view.roll.addEventListener('click', () => game.turn(), false);
