import "../App.css";
import React from "react";
import MusicPage from "./MusicPage";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      
      <h1 className='header'>16ixTeenBeatz</h1>
      create a navbar that floats e 
      <MusicPage/>
    </div>
  );
}

export default App;
