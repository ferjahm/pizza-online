import React from "react";
import { NavLink } from "react-router-dom";

const Navabar = () => {
  return (
    <nav className="navabar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/about" className="link">
        about
      </NavLink>
      <NavLink to="/product" className="link">
        product
      </NavLink>
    </nav>
  );
};

export default Navabar;
