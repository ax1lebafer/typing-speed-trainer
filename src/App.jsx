import { useRef } from "react";
import "./App.css";
import { InputArea } from "./components/InputArea/InputArea";
import { TextDisplay } from "./components/TextDisplay/TextDisplay";
import { Timer } from "./components/Timer/Timer";
import { ReduxProvider } from "./store/ReduxProvider";

function App() {
  const inputRef = useRef(null);

  return (
    <ReduxProvider>
      <div className="app">
        <h1 className="heading">Typing Speed Trainer</h1>
        <Timer inputRef={inputRef} />
        <TextDisplay />
        <InputArea inputRef={inputRef} />
      </div>
    </ReduxProvider>
  );
}

export default App;
