import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ToDoForm } from "./components/ToDoForm";
import { AboutPage } from "./pages/AboutPage";
import { ToDoPage } from "./pages/ToDoPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<ToDoPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
