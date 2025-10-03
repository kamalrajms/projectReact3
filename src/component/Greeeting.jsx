import React from "react";
import "./Greeting.css";

export default function Greeeting(props) {
  return (
    <>
      <div className="react">React js class</div>
      <p className="absent">
        to absent:{props.name}
        {props.day}
      </p>
    </>
  );
}
