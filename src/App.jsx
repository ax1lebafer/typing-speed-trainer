import "./App.css";
import { InputArea } from "./components/InputArea/InputArea";
import { Statistics } from "./components/Statistics/Statistics";
import { TextDisplay } from "./components/TextDisplay/TextDisplay";
import { ReduxProvider } from "./store/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <div className="app">
        <h1 className="heading">Typing Speed Trainer</h1>
        <TextDisplay />
        <InputArea />
        <Statistics />
      </div>
    </ReduxProvider>
  );
}

export default App;
