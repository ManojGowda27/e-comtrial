import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span>EN</span>
          <div className="searchContainer">
            <input type="text" />
            <i></i>
          </div>
        </div>
        <div className="center">
          <span>MG</span>
        </div>
        <div className="right">
          <ul className="user-login">
            <li>Register</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
