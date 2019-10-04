import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      {" | "}
      <NavLink to="/about">Users</NavLink>
      {" | "}
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
}

export default Header;
