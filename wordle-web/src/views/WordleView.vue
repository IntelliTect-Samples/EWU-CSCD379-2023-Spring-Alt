<template>
  <h1>Wordle Mind Bender</h1>
  <v-text-field
    v-model="guess"
    label="Guess"
    variant="solo"
    @keyup.enter="submitGuess"
    :disabled="wordleGame.gameState !== WordleGameState.Started"
  ></v-text-field>

  <v-btn :disabled="wordleGame.gameState !== WordleGameState.Started" @click="submitGuess">
    Check
  </v-btn>
  <div>
    <v-row v-for="word in wordleGame.guesses" :key="word.text">
      <v-col v-for="letter in word.letters" :key="letter.char">
        <v-card :color="letter.color">
          <v-card-title>{{ letter.char }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>

  <h2 v-if="wordleGame.gameState === WordleGameState.Won">You Won!</h2>
  <h2 v-if="wordleGame.gameState === WordleGameState.Lost">Sorry, You Lost</h2>
  <v-btn v-if="wordleGame.gameState !== WordleGameState.Started" @click="newGame">New Game</v-btn>

  <h2>{{ guess }}</h2>
  <h3>{{ wordleGame.secretWord }}</h3>
</template>

<script setup lang="ts">
import { WordleGame, WordleGameState } from '@/scripts/wordleGame'
import { WordsService } from '@/scripts/wordsService'
import { ref, reactive } from 'vue'

const wordleGame = reactive(new WordleGame(WordsService.getRandomWord()))

const guess = ref('')

function newGame() {
  wordleGame.startGame(WordsService.getRandomWord())
}

function submitGuess() {
  wordleGame.addGuess(guess.value)
  guess.value = ''
}
</script>
