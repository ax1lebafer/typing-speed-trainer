import { useDispatch, useSelector } from "react-redux";
import {
  incrementErrors,
  reset,
  setStartTime,
  setUserInput,
} from "../../store/features/typingSlice";

import styles from "./InputArea.module.css";

export function InputArea() {
  const dispatch = useDispatch();
  const { userInput, startTime, text } = useSelector((state) => state.typing);

  const handleChange = (e) => {
    const input = e.target.value;

    if (!startTime) {
      dispatch(setStartTime(Date.now()));
    }

    if (input.length > userInput.length) {
      const lastChar = input[input.length - 1];
      const correspondingChar = text[input.length - 1];

      if (lastChar !== correspondingChar) {
        dispatch(incrementErrors());
      }
    }

    dispatch(setUserInput(input));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        autoFocus
        placeholder="Start typing..."
        className={styles.input}
      />
      <button onClick={handleReset} className={styles.button}>
        <img className={styles.reset} src="./reset.svg" alt="reset" />
      </button>
    </div>
  );
}
