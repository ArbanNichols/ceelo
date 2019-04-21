function roll() {
  this.sides = 6;
  return Math.floor(this.sides * Math.random()) + 1;
}

let message = '';
const loss = [1, 2, 3];
const win = [4, 5, 6];
let rollResult = [roll(), roll(), roll()];
let rollSorted = [...rollResult].sort();

if (rollSorted.toString() === win.toString()) {
  message = `${win.toString()} You win!`;
} else if (rollSorted.toString() === loss.toString()) {
  message = `${loss.toString()} You Lose`;
} else if (rollResult[0] === rollResult[1] && rollResult[1] === rollResult[2]) {
  message = `${rollResult[1]} Trips!`;
} else if (rollSorted[0] === rollSorted[1]) {
  [rollSorted[1], rollSorted[2]] = [rollSorted[2], rollSorted[1]];
  message = `${rollSorted.toString()} Scored: ${rollSorted[1]}`;
} else if (rollSorted[1] === rollSorted[2]) {
  [rollSorted[0], rollSorted[1]] = [rollSorted[1], rollSorted[0]];
  message = `${rollSorted.toString()} Scored: ${rollSorted[1]}`;
} else {
  message = `${rollResult.toString()} No dice, roll again!`;
}

console.log(message);
