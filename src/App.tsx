import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { WelcomingButton } from "./WelcomingButton";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <WelcomingButton name="React Sydney" />
      </header>
    </div>
  );
};

export default App;
