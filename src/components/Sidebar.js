import React from "react";

function Sidebar({ showSidebar }) {
  return (
    <aside className={`${showSidebar ? "show-sidebar" : null}`}>
      <ul className="side-links">
        <li>
          <a href="/" className="side-link">
            About
          </a>
          <hr />
        </li>
        <li>
          <a href="/" className="side-link">
            Discover
          </a>
          <hr />
        </li>
        <li>
          <a href="/" className="side-link">
            Get Started
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
