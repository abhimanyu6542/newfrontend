import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from '../image/logo.jpg';
import "../App.css";
import "./Navbar.css";

const Navmenubar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo ms-3 ps-3">CodeLights</h3>
        <ul
          className={isMobile ? "nav-linksmobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
          <Link className="home text-white fs-5" to={"/"}>
            Home 
          </Link>
          </li>
          <li>
          <Link className="home text-white fs-5" to={"/about"}>
            About 
          </Link>
          </li>
          <li>
          <Link className="home text-white fs-5" to={"/services"}>
            Services 
          </Link>
          </li>
          <li>
          <Link className="home text-white fs-5" to={"/portfolio"}>
            Portfolio 
          </Link>
          </li>
          <li>
          <Link className="home text-white fs-5" to={"/contact"}>
            Contact 
          </Link>
          </li>
          <li>
          <Link className="home text-white fs-5 " to={"/login"}>
            Login
          </Link>
          </li>
          <li>
          <Link className="home text-white fs-5" to={"/signup"}>
            Register
          </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <i class="bi bi-x"></i> : <i class="bi bi-list"></i>}
        </button>
      </nav>
    </>
  );
};

export default Navmenubar;
