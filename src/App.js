import React from 'react';
import './App.css';
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import Routes from "./routes"
import { BrowserRouter as Router } from "react-router-dom"

//TODO: set viewport position link with new anchor

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
        <NavBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
