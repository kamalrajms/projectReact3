import React from "react";

export default function Square({ handleClick, value }) {
  return (
    <div>
      <button className="xbuttom" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}
