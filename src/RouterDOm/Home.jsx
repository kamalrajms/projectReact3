import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setcount] = useState(0);
  const page = useNavigate();

  useEffect(() => {
    if (count > 5) {
      page("/Service");
    }
  }, [count]);

  return (
    <div>
      Home component
      <button onClick={() => setcount(count + 1)}>
        Home to Service {count}
      </button>
    </div>
  );
}
