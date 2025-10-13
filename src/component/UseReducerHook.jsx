import React, { useState, useReducer } from "react";

export default function UseReducerHook() {
  // const [count, setcount] = useState(0);
  const initialValue = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      {/* <h1>count :{count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
      <button onClick={() => setcount(0)}>reset</button> */}

      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
