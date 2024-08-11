import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker/locale/ru";

const generateText = () => {
  const wordCount = 100;
  const selectedWords = [];

  while (selectedWords.length < wordCount) {
    const word = faker.lorem.word();

    if (!word.includes("-") && word.length >= 4 && word.length <= 9) {
      selectedWords.push(word);
    }
  }

  return selectedWords.join(" ");
};

const initialState = {
  text: generateText(),
  userInput: "",
  startTime: null,
  errors: 0,
  wpm: 0,
  timer: 30,
  timeRemaining: 30,
  isRunning: false,
  isFinished: false,
};

const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    setUserInput(state, action) {
      state.userInput = action.payload;
    },
    setStartTime(state, action) {
      state.startTime = action.payload;
    },
    incrementErrors(state) {
      state.errors += 1;
    },
    reset(state) {
      state.text = generateText();
      state.userInput = "";
      state.startTime = null;
      state.errors = 0;
      state.timeRemaining = state.timer;
      state.isRunning = false;
      state.isFinished = false;
      state.wpm = 0;
    },
    setTimer(state, action) {
      state.timer = action.payload;
      state.timeRemaining = action.payload;
    },
    startTimer(state) {
      state.isRunning = true;
    },
    decrementTime(state) {
      if (state.timeRemaining > 0) {
        state.timeRemaining -= 1;
      }
      if (state.timeRemaining === 0) {
        state.isRunning = false;
        state.isFinished = true;

        const wordsTyped = state.userInput.split(" ").length;
        const minutes = state.timer / 60;
        state.wpm = Math.round(wordsTyped / minutes);
      }
    },
  },
});

export const {
  setUserInput,
  setStartTime,
  incrementErrors,
  reset,
  setTimer,
  startTimer,
  decrementTime,
} = typingSlice.actions;

export default typingSlice.reducer;
