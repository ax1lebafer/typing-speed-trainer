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

    if (input[input.length - 1] !== text[input.length - 1]) {
      dispatch(incrementErrors());
    }

    dispatch(setUserInput(input));
  };

  const handleReset = () => {
    dispatch(reset());
    dispatch(setUserInput(""));
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
        Restart
      </button>
    </div>
  );
}
