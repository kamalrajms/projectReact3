import React, { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mounted");
  }, [count]);
  useEffect(() => {
    console.log(`count changed to ${count}`);
  }, [count]);
  return (
    <div>
      <h1>Hello ,useEffect!</h1>
      <h4>count:{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
