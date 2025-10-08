import React from "react";
import UseStateInput from "./component/UseStateInput";
import MultipleFieldInp from "./component/MultipleFieldInp";
import RegistrationForm from "./component/RegistrationForm";
import UseEffectHook from "./component/UseEffectHook";
import UeseffectTimer from "./component/UeseffectTimer";
import APIUseEffect from "./component/APIUseEffect";

export default function App() {
  return (
    <div>
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
