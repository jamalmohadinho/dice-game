import React, { useState, useEffect } from "react";
import Die from "./Die";
import "./Dice.css";

const Dice = ({ numDice = 6, maxVal = 20 }) => {
  const [numbers, setNumbers] = useState(
    Array.from(
      { length: numDice },
      () => Math.floor(Math.random() * maxVal) + 1
    )
  );
  const [rolling, setRolling] = useState(false);
  const [rollHistory, setRollHistory] = useState([]);
  const [highScore, setHighScore] = useState(0);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newRoll = Array.from(
        { length: numDice },
        () => Math.floor(Math.random() * maxVal) + 1
      );

      setNumbers(newRoll);

      const sum = newRoll.reduce((a, b) => a + b, 0);
      setHighScore((prev) => Math.max(prev, sum));

      setRollHistory((prev) => [newRoll, ...prev].slice(0, 5));

      if (newRoll.every((v) => v === maxVal)) {
        alert("🎉 You rolled all max values!");
      }

      setRolling(false);
    }, 500);
  };

  return (
    <div className="Dice">
      <h2>Dice Game</h2>

      <div className="dice-container">
        {numbers.map((num, idx) => (
          <Die key={idx} val={num} rolling={rolling} />
        ))}
      </div>

      <button onClick={rollDice}>Roll</button>

      <div className="stats">
        <p>High Score: {highScore}</p>
        <h3>Roll History</h3>
        <ul>
          {rollHistory.map((roll, i) => (
            <li key={i}>{roll.join(", ")}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dice;
