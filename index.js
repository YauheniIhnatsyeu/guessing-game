const GuessingGame = require('./src/guessing-game.js');

const game = new GuessingGame();

game.setRange(0, 4048);

let result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();
game.lower();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.greater();
result = game.guess();
game.lower();
result = game.guess();

console.log(result);




window.game = new GuessingGame();