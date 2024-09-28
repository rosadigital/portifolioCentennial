// Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = ({ title, subtitle, children }) => {
  return (
    <header className="header">
      <h2 className="header-title">{title}</h2>
      {subtitle && <p className="header-subtitle">{subtitle}</p>}
      {children}
    </header>
  );
};

export default Header;
