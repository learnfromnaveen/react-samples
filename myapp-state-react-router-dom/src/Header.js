import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav nav-default">
       <ul className="nav navbar-nav">
      <li className="active">
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
      <NavLink to="/posts">Posts</NavLink></li>
      
    </ul>
    </nav>
  );
}

export default Header;
