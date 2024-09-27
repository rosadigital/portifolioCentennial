import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="toolbar">
        <h1 className="logo">Meu Portfólio</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">Sobre Mim</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/services">Serviços</Link>
          <Link to="/contact">Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
