import React from "react";
import "./Header.css";
import logoHarry from "../../assets/image/harry-potter-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="contenedor-header">
      <div className="navbar">
        <div className="logo-header">
          <Link to={"/"}>
            <img src={logoHarry} alt="logo-harry-potter" />
          </Link>
        </div>
        <div className="menu-navbar">
          <ul className="enlaces-agrup">
            <Link to={"/"}>
              <li className="enlaces">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="enlaces">About</li>
            </Link>
            <Link to={"/contact"}>
              <li className="enlaces">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
