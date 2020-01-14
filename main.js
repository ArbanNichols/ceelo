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

    handleDiceAnimation(this.dice1);
    handleDiceAnimation(this.dice2);
    handleDiceAnimation(this.dice3);

    setTimeout(()=>{
      showResult(this.dice1, results[0]);
      showResult(this.dice2, results[1]);
      showResult(this.dice3, results[2]);
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

var handleDiceAnimation = dice => {
   if (dice.state === 'idle'){
      dice.o.classList.remove('idle');
    }

    dice.o.classList.remove('spin');
    void dice.o.offsetWidth;
    dice.o.classList.add('spin');
}

var showResult = (dice, value) => {
  dice.o.classList.remove(dice.state);
  void dice.o.offsetWidth;

  if (value === 1) {
    dice.o.classList.add('show-top');
    dice.state = 'show-top';
  } else if (value === 2) {
    dice.o.classList.add('show-left');
    dice.state = 'show-left';
  } else if (value === 3) {
    dice.o.classList.add('show-front');
    dice.state = 'show-front';
  } else if (value === 4) {
    dice.o.classList.add('show-back');
    dice.state = 'show-back';
  } else if (value === 5) {
    dice.o.classList.add('show-right');
    dice.state = 'show-right';
  } else if (value === 6) {
    dice.o.classList.add('show-bottom');
    dice.state = 'show-bottom';
  }
}