import './App.css';
import React from "react";
import Home from './pages/Home';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
