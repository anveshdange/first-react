import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>( Made by Anvesh Dange )</p>
        <a
          className="App-link"
          href="https://bit.ly/anveshdange"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Personal Portfolio (Click Me)
        </a>
      </header>
    </div>
  );
}

export default App;
