import React, { useState } from "react";
import Square from "./Square";

export default function WebApp() {
  const [Xnext, setXnext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = square.slice();
    if (Xnext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquare(nextSquare);
    setXnext(!Xnext);
    console.log(Xnext);
  }

  return (
    <div className="square">
      <nav>
        <Square value={square[0]} handleClick={() => handleClick(0)} />
        <Square value={square[1]} handleClick={() => handleClick(1)} />
        <Square value={square[2]} handleClick={() => handleClick(2)} />
      </nav>
      <nav>
        <Square value={square[3]} handleClick={() => handleClick(3)} />
        <Square value={square[4]} handleClick={() => handleClick(4)} />
        <Square value={square[5]} handleClick={() => handleClick(5)} />
      </nav>
      <nav>
        <Square value={square[6]} handleClick={() => handleClick(6)} />
        <Square value={square[7]} handleClick={() => handleClick(7)} />
        <Square value={square[8]} handleClick={() => handleClick(8)} />
      </nav>
    </div>
  );
}
