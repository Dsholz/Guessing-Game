//Imports functions needed from other files.
import HangmanGame from './hangman';
import getPuzzle from './requests';

const correctWord = document.querySelector('#puzzle');
const remainingGuesses = document.querySelector('#guesses');
let game1, word = [];

//Adds an event that listens for when the user clicks a key(guess)
//on the keyboard and adds it onto the word array.
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  word.push(guess);
  render(word);

});

//The render function appends statusMessage to HTML paragraph element and creates
//a span element for each letter of the puzzle.
const render = () => {
  correctWord.innerHTML = '';
  remainingGuesses.innerHTML = game1.statusMessage;
  game1.Puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    correctWord.appendChild(letterEl);
  });
}

//The startGame function renders a new puzzle to the DOM which is fetched from
//(puzzle.mead.io/puzzle) our puzzle API.
const startGame = async () => {
  const puzzle = await getPuzzle(2);
  game1 = new HangmanGame(puzzle, 5);
  correctWord.textContent = game1.Puzzle;
  remainingGuesses.textContent = game1.statusMessage;
};

document.querySelector('#reset').addEventListener('click', startGame());

startGame();

//Exports the game1 array to allow usage across other files.
export { game1 as default }