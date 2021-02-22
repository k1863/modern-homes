import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = ({ currentPage, imageUrl }) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h2 className="page-link">
        <NavLink className="nav-link" activeClassName="is-active" to="/">
          Home &nbsp;
        </NavLink>
        / {currentPage}
      </h2>
      <h1 className="heading-primary">{currentPage}</h1>
    </div>
  );
};

export default HeaderNav;
