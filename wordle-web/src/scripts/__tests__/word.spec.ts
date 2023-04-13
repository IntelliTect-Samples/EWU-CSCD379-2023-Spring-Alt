import { describe, it, expect } from 'vitest'
import { Word } from '@/scripts/word'
import { LetterStatus } from '@/scripts/letter'

describe('Word', () => {
  it('Records Word', () => {
    const word = new Word('tests')
    expect(word.text).toBe('tests')
  })

  it('Checks Correct Word', () => {
    const word = new Word('tests')
    const result = word.evaluateWord('tests')
    expect(result).toBe(true)
  })

  it('Checks Close Word', () => {
    const word = new Word('seste')
    const result = word.evaluateWord('tests')
    expect(result).toBe(false)
    expect(word.letters[0].status).toBe(LetterStatus.Misplaced)
    expect(word.letters[1].status).toBe(LetterStatus.Correct)
    expect(word.letters[2].status).toBe(LetterStatus.Correct)
    expect(word.letters[3].status).toBe(LetterStatus.Correct)
    expect(word.letters[4].status).toBe(LetterStatus.Wrong)
  })
})
