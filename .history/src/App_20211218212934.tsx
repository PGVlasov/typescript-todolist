import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
