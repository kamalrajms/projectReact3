import React from "react";
import Greeeting from "./component/Greeeting";
import Greet from "./component/Greet";
import UsestateHook from "./component/UsestateHook";

export default function App() {
  const name = "karthick";
  const day = "friday";

  return (
    <>
      <UsestateHook />
      <div>Hello </div>
      <Greeeting name={name} day={day} />
      <Greet day={day} name={name} />
      <nav className="box">hello world</nav>
    </>
  );
}
