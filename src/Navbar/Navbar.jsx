import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Navbar = () => (
  <header className="header-container">
    <Link to="/" className="header-link-styles">
      <h2>Sasquatch</h2>
    </Link>
    <Menu />
  </header>
);

export default Navbar;
