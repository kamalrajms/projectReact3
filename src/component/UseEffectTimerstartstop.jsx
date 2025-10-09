import React, { useState, useEffect } from "react";

export default function UseEffectTimerstartstop() {
  const [sec, setSec] = useState(0);
  const [Isrunning, SetIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (Isrunning) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [Isrunning]);

  const handleStart = () => {
    SetIsRunning(true);
  };
  const handleStop = () => {
    SetIsRunning(false);
  };
  const handlereset = () => {
    SetIsRunning(false);
    setSec(0);
  };
  return (
    <div>
      <h1>timer:{sec}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handlereset}>Reset</button>
    </div>
  );
}
