import { useSelector } from "react-redux";
import styles from "./TextDisplay.module.css";

export function TextDisplay() {
  const { text, userInput } = useSelector((state) => state.typing);

  const renderText = () => {
    return text.split("").map((char, index) => {
      let className;
      if (index < userInput.length) {
        className =
          char === userInput[index] ? styles.correct : styles.incorrect;
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return <div className={styles.textWrapper}>{renderText()}</div>;
}
