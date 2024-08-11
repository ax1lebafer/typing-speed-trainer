import { createSlice } from "@reduxjs/toolkit";
import words from "russian-words";

const generateText = () => {
  const wordCount = 100;
  const selectedWords = [];
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWords.push(words[randomIndex]);
  }
  return selectedWords.join(" ");
};

const initialState = {
  text: generateText(),
  userInput: "",
  startTime: null,
  errors: 0,
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
      state.userInput = generateText();
      state.startTime = null;
      state.errors = 0;
    },
  },
});

export const { setUserInput, setStartTime, incrementErrors, reset } =
  typingSlice.actions;

export default typingSlice.reducer;
