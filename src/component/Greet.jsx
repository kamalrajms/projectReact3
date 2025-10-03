import React from "react";
import Style from "./Greet.module.css";

export default function Greet({ day, name }) {
  const theme = {
    color: "yellow",
    backgroundColor: "#000",
  };
  return (
    <div>
      <h2 className="day">
        today: {day} {name}
      </h2>
      <p className={Style.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi in,
        quos delectus quae laboriosam magni corrupti recusandae assumenda
        laudantium suscipit porro perferendis a possimus adipisci! Nobis culpa
        doloremque temporibus maxime?
      </p>
      <h1 style={{ color: "pink", padding: "50px" }}>hello ram ravi</h1>
      <h2 style={theme}>theme color of object way styleing</h2>
    </div>
  );
}
