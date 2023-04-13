import { describe, it, expect } from 'vitest'
import { WordleGame, WordleGameState } from '@/scripts/wordleGame'

describe('WordleGame', () => {
  it('Records Word', () => {
    const game = new WordleGame('tests')
    expect(game.secretWord).toBe('tests')
  })

  it('Wins Game', () => {
    const game = new WordleGame('tests')
    expect(game.secretWord).toBe('tests')
    game.addGuess('lives')
    expect(game.gameState).toBe(WordleGameState.Started)
    game.addGuess('tests')
    expect(game.gameState).toBe(WordleGameState.Won)
  })

  it('Loses Game', () => {
    const game = new WordleGame('tests')
    expect(game.secretWord).toBe('tests')
    game.addGuess('lives')
    game.addGuess('lives')
    game.addGuess('lives')
    game.addGuess('lives')
    game.addGuess('lives')
    game.addGuess('lives')
    expect(game.gameState).toBe(WordleGameState.Lost)
  })
})
