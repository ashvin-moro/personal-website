import React from 'react';
import './App.css';
import NavBar from "./components/navbar"
import Routes from "./routes"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
