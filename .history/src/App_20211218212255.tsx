import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
