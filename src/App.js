import "./App.css";
import slt from "./images/slt.png";
import scooby from "./images/scooby.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello from App</p>
        <img src={slt} alt="slt" />
        <img src={scooby} alt="scooby" />
      </header>
    </div>
  );
}

export default App;
