import "./App.css";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jokes container="container" joke="joke" black="black"></Jokes>
      </header>
    </div>
  );
}

export default App;
