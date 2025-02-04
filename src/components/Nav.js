import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/computers">Computers</NavLink></li>
      <li><NavLink to="/sunsets">Sunsets</NavLink></li>
      <li><NavLink to="/comics">Comics</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
