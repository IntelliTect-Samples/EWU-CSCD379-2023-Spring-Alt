import { Word } from '@/scripts/word'

export class WordleGame {
  constructor(secretWord: string, maxGuesses: number = 6) {
    this.startGame(secretWord)
    this.maxGuesses = maxGuesses
  }

  public secretWord!: string
  public guesses = new Array<Word>()
  public gameState!: WordleGameState
  public maxGuesses: number

  public startGame(secretWord: string) {
    this.secretWord = secretWord
    // Clear the guesses array
    this.guesses.splice(0, this.guesses.length)
    this.gameState = WordleGameState.Started
  }

  // Add a guess and evaluate it
  public addGuess(guessString: string) {
    const guess = new Word(guessString)
    this.guesses.push(guess)
    if (guess.evaluateWord(this.secretWord)) {
      this.gameState = WordleGameState.Won
    } else if (this.guesses.length === this.maxGuesses) {
      this.gameState = WordleGameState.Lost
    }
  }
}

export enum WordleGameState {
  Started,
  Won,
  Lost
}
