// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">FILM-FLIX</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-button">Home</Link>
        </li>
        <li>
          <Link to="/movies" className="nav-button">Movies</Link>
        </li>
        <li>
          <Link to="/tv-shows" className="nav-button">TV Shows</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
