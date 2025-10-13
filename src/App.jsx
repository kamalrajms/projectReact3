import React, { useContext, createContext } from "react";
import UseStateInput from "./component/UseStateInput";
import MultipleFieldInp from "./component/MultipleFieldInp";
import RegistrationForm from "./component/RegistrationForm";
import UseEffectHook from "./component/UseEffectHook";
import UeseffectTimer from "./component/UeseffectTimer";
import APIUseEffect from "./component/APIUseEffect";
import UseEffectTimerstartstop from "./component/UseEffectTimerstartstop";
import UseRefHook from "./component/UseRefHook";
import First from "./SubComponent/First";
import UseReducerHook from "./component/UseReducerHook";
import UseCllbackhook from "./component/UseCllbackhook";

export const Pass = createContext();

export default function App() {
  const name = "Ram";
  return (
    <div>
      <UseCllbackhook />
      <UseReducerHook />
      <div className="context">
        App component
        <Pass.Provider value={name}>
          <First />
        </Pass.Provider>
      </div>

      <UseRefHook />
      <UseEffectTimerstartstop />
      <APIUseEffect />
      <UeseffectTimer />
      <UseEffectHook />
      <h1>React class</h1>
      <UseStateInput />
      <h1>multiple field</h1>
      <MultipleFieldInp />
      <h1>form</h1>
      <RegistrationForm />
    </div>
  );
}
