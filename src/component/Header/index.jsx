import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <NavLink className="header-title"> Product-app </NavLink>
      <NavLink className="sign-in" to="/sign-in">
        Sign-in
      </NavLink>
    </div>
  );
}

Header.propTypes = {};

export default Header;
