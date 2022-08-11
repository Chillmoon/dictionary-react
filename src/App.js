import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header>
        <p>Hi, this is my Dictionary app</p>
      </header>
      <SearchEngine defaultWord="cat" />
      <footer>
        This project was coded by <a href="https://t.me/Chillmoon">Chillmoon</a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/Chillmoon/weather-react">GitHub</a>.
      </footer>
    </div>
  );
}

export default App;
