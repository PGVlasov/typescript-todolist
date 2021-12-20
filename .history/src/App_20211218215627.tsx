import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ToDoForm } from "./components/ToDoForm";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<ToDoForm />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
