import React, { useState } from "react";
import Greeeting from "./component/Greeeting";
import Greet from "./component/Greet";
import UsestateHook from "./component/UsestateHook";
import ConditionalRendering from "./component/ConditionalRendering";
import ListRendering from "./component/ListRendering";
import Dark from "./component/Dark";

export default function App() {
  const name = "karthick";
  const day = "friday";
  const [user, setUser] = useState(false);

  return (
    <>
      <Dark />
      {user ? <ListRendering /> : <ConditionalRendering />}
      <button onClick={() => setUser(!user)}>user</button>
      <UsestateHook />
      <div>Hello </div>
      <Greeeting name={name} day={day} />
      <Greet day={day} name={name} />
      <nav className="box">hello world</nav>
    </>
  );
}
