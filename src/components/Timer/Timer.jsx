import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimer, decrementTime } from "../../store/features/typingSlice";

import styles from "./Timer.module.css";

export function Timer({ inputRef }) {
  const dispatch = useDispatch();
  const { timeRemaining, isRunning, isFinished, wpm, errors } = useSelector(
    (state) => state.typing
  );

  useEffect(() => {
    let timer;
    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeRemaining, dispatch]);

  const handleTimeSelect = (event) => {
    dispatch(setTimer(Number(event.target.value)));

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (isFinished) {
    return (
      <div className={styles.results}>
        <p>Время вышло</p>
        <p>
          WPM: <span className={styles.wpm}>{wpm}</span>
        </p>
        <p>
          Errors: <span className={styles.errors}>{errors}</span>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.timerWrapper}>
      <select
        className={styles.time}
        onChange={handleTimeSelect}
        disabled={isRunning}
      >
        <option value="15">15 секунд</option>
        <option selected value="30">
          30 секунд
        </option>
        <option value="60">60 секунд</option>
        <option value="120">120 секунд</option>
      </select>
      {isRunning && <p className={styles.timeDisplay}>{timeRemaining}</p>}
    </div>
  );
}
