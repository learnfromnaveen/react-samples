import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/users" className="nav-link">Users</NavLink>
        </li>
        <li>
          <NavLink to="/posts" className="nav-link">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
