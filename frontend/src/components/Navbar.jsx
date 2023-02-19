import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/components/Navbar.css"
import logo from "../assets/botanique-logo.png"

const Navbar = () => {
  return (
    <div className="navbar-body">
      <img src={logo} alt="logo" />

      <div className='navbar-flex'>
        <NavLink className="navbar-links" to="/home">Home</NavLink>
        <NavLink className="navbar-links" to="/image-upload">Leaf Detection</NavLink>
      </div>
    </div>
  )
}

export default Navbar