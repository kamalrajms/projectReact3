import React, { useState } from "react";

export default function UseReducerHook() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>count :{count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
      <button onClick={() => setcount(0)}>reset</button>
    </div>
  );
}
