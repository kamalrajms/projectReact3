import React, { useState } from "react";

export default function Dark() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "30px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        switch to {dark ? "Lighi mode" : "darkmode"}
      </button>
      <p>You are in {dark ? "dark" : "light"} mode</p>
    </div>
  );
}
