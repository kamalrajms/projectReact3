import React, { useState } from "react";

export default function UsestateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decremant</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
