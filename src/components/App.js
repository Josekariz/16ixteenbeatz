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
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact default element={<Home />} />
          <Route path="/musicpage" element={<MusicPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
