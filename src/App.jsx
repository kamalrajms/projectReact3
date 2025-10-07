import React from "react";
import UseStateInput from "./component/UseStateInput";
import MultipleFieldInp from "./component/MultipleFieldInp";
import RegistrationForm from "./component/RegistrationForm";

export default function App() {
  return (
    <div>
      <h1>React class</h1>
      <UseStateInput />
      <h1>multiple field</h1>
      <MultipleFieldInp />
      <h1>form</h1>
      <RegistrationForm />
    </div>
  );
}
