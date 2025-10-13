import React, { useState, useEffect } from "react";

export default function CallbackList({ getItem }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(getItem());
    console.log("upding items");
  }, [getItem]);
  return (
    <div>
      {item.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
