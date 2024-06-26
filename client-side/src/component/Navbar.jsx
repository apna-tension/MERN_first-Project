// Navbar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../image/img2.png";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const { isLoggedin } = useAuth();
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <nav id="main-nav" className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {isLoggedin ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
