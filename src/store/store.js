import { configureStore } from "@reduxjs/toolkit";
import typingSlice from "./features/typingSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      typing: typingSlice,
    },
  });
};
