import React, { useState } from "react";

export default function UseStateInput() {
  const [name, setName] = useState("euwf");
  const [ischeck, setIsCheck] = useState(false);
  console.log(name, ischeck);

  return (
    <div>
      <h2>Controlled text input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={ischeck}
        onChange={(e) => setIsCheck(e.target.checked)}
      />
      <p>checkbox is {ischeck ? "checked" : "unchecked "} </p>
    </div>
  );
}
