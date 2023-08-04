import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>jihadmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/29/10/33/lion-8096155_1280.png"
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
