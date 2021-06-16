import React from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import { IoClose } from "react-icons/io5";

function Navbar({ showSidebar, setShowSidebar }) {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      {!showSidebar ? (
        <img
          src={Hamburger}
          alt="toggle"
          className="toggle"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      ) : (
        <IoClose
          className="toggle-close"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      )}
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Discover
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
