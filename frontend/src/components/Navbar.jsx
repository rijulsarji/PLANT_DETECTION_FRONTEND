import React from "react";
import "../styles/components/Navbar.css";
import logo from "../assets/botanique-logo.png";
import {NavLink} from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar-body">
      <img
        src={logo}
        alt="logo"
        onClick={() => window.open("http://localhost:3000/", "_self")}
      />

      <div className="navbar-flex">
        <NavLink className="navbar-links" to="/home">
          Leaf Detection
        </NavLink>
        <NavLink className="navbar-links" to="/about">
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
