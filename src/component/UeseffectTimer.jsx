import React, { useState, useEffect } from "react";

export default function UeseffectTimer() {
  const [sec, setsec] = useState(0);

  useEffect(() => {
    const inerval = setInterval(() => {
      setsec((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(inerval);
    };
  }, []);

  return (
    <div>
      <h2>Seconds:{sec}</h2>
    </div>
  );
}
