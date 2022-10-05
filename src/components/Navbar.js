import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1 className="header">16ixTeenBeatz</h1>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/musicpage">
          <li>MusicList</li>
        </Link>
        
      </ul>
    </nav>
  );
}

export default Navbar;
