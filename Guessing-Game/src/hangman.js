//Imports functions needed across other files.
import game1 from './index';

//This defines a class for the hangman game.
class HangmanGame {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }
  //The presentStatus method determines what state the user is in
  //whether the game has been failed or finished. 
  presentStatus() {
    const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ');

    if (this.guesses <= 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    }
  }
  //The statusMessage method gets a status message dependent
  //on the presentSatus of the user.
  get statusMessage() {
    if (this.status === 'finished') {
      return 'Great Work! You Guessed the Word';
    } else if (this.status === 'failed') {
      return `Nice Try! The Word was "${this.word.join('')}"`;
    } else {
      return `Guesses Left: ${this.guesses}`;
    }
  }
  //The makeGuess method determines whether a guess should 
  //be made dependent on the user's presentStatus .
  makeGuess(char) {
    if (this.status === 'playing') {
      const leter = char.toLowerCase();
      if (this.guessedLetters.includes(leter)) {
        console.log('This Letter Has Already Been Guessed');
      } else {
        if (!this.word.includes(leter)) {
          this.guessedLetters = [...this.guessedLetters, leter];
          this.guesses -= 1;
        } else {
          this.guessedLetters = [...this.guessedLetters, leter];
        }
      }
    }
    game1.presentStatus();
  }
  //The Puzzle method compares puzzle with each user entry and determines 
  //whether it exist in the guessedLetters array, And if it does adds
  //it to the puzzle string.
  get Puzzle() {
    let puzzle = '';
    this.word.forEach(letter => {
      const includes = this.guessedLetters.includes(letter);
      if (includes || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });
    return puzzle.toUpperCase();
  }
}

//Exports the HangmanGame class to allow usage across other files.
export { HangmanGame as default };