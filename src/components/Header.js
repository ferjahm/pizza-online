import React from "react";
import { BsCartFill, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navabar from "./Navabar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navabar />
      <div className="shop">
        <Link to="panier">
          <div className="btn-shop">
            <BsCartFill />
          </div>
        </Link>
        <Link to="/form">
          <button className="btn-login">
            login
            <BsPersonFill />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
