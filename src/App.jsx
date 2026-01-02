import React, { useState } from "react";
import Dice from "./components/Dice";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <header>
        <h1>🎲 Dice Roller</h1>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <Dice numDice={6} maxVal={6} />

      <footer>
        <p>
          &copy; Made by{" "}
          <a
            href="https://github.com/jamalmohadinho"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jamal Apicha
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
