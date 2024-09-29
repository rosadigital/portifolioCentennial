/**
 * File Name: NavBar.jsx
 * Student’s Name: Felipe Rosa
 * Student ID: 301415379
 * Date: September 28, 2024
 */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="toolbar">
        <img src={logo} alt="Logo Rosa Technologies" className="logo" />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
