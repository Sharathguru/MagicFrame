import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>MagicFrames</span>
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#" className="active">Create a Frame</a>
        <a href="#">Order History</a>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="navbar-avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;