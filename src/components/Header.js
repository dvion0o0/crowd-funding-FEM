import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "../images/logo-mastercraft.svg";
import Sidebar from "./Sidebar";
function Header({ openModal, showModal, showSidebar, setShowSidebar }) {
  const [bookmark, setBookmark] = useState(false);

  return (
    <header className={`${showModal ? "modal-active" : null}`}>
      <div className="header-center">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} />
        <div className="bookmark-container">
          <img src={Logo} alt="logo" />
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p>
            A beutiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="bookmark-btns">
            <button className="btn bookmark-btn" onClick={openModal}>
              Back this project
            </button>
            <div
              className="bookmark-toggle"
              onClick={() => setBookmark(!bookmark)}
            >
              <svg
                className={`${bookmark ? "bookmark active" : "bookmark"}`}
                width="56"
                height="56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              <span className={`${bookmark ? "bookmark-active" : null}`}>
                {bookmark ? "Bookmarked" : "Bookmark"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
