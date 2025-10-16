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
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./RouterDOm/Home";
import About from "./RouterDOm/About";
import Contact from "./RouterDOm/Contact";
import Service from "./RouterDOm/Service";
import WebApp from "./SubComponent/WebApp";
import AppDevelop from "./SubComponent/AppDevelop";
import BlogDetails from "./RouterDOm/BlogDetails";

export const Pass = createContext();

export default function App() {
  const name = "Ram";
  const display = false;
  return (
    <div>
      {display && (
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
      )}
      <BrowserRouter>
        <div className="menu">
          <Link to="">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Service">Service</Link>
        </div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />}>
            <Route path="" element={<WebApp />} />
            <Route path="appdevelopment" element={<AppDevelop />} />
          </Route>
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
