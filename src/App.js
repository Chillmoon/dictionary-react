import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi, this is my Dictionary app</p>
        <SearchEngine defaultWord="cat" />
      </header>
    </div>
  );
}

export default App;
