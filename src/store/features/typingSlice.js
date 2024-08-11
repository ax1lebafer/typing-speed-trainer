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
    },
  },
});

export const { setUserInput, setStartTime, incrementErrors, reset } =
  typingSlice.actions;

export default typingSlice.reducer;
