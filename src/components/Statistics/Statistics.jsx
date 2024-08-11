import { useSelector } from "react-redux";
import styles from "./Statistics.module.css";

export function Statistics() {
  const { userInput, startTime, errors } = useSelector((state) => state.typing);

  const calculateWPM = () => {
    if (!startTime) return 0;
    const minutes = (Date.now() - startTime) / 60000;
    return Math.round(userInput.length / 5 / minutes);
  };

  return (
    <div className={styles.statisticsWrapper}>
      <p>WPM: {calculateWPM()}</p>
      <p>Errors: {errors}</p>
    </div>
  );
}
