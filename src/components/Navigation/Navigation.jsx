import React from "react";
import { ReactComponent as Logo } from "../../modern-homes-logo.svg";
import { NavLink } from "react-router-dom";
import "../../sass/style.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo-box">
        <Logo />
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink className="nav-link" activeClassName="is-active" to="/">
            Home
          </NavLink>
        </li>

        <li className="navigation__item">
          <NavLink className="nav-link" activeClassName="is-active" to="/about">
            About Us
          </NavLink>
        </li>

        <li className="navigation__item">
          <NavLink
            className="nav-link"
            activeClassName="is-active"
            to="/properties"
          >
            Properties
          </NavLink>
        </li>

        <li className="navigation__item push">
          <NavLink
            className="nav-link"
            activeClassName="is-active"
            to="/agents"
          >
            Agents
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="nav-link" activeClassName="is-active" to="/blog">
            Blog
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className="nav-link"
            activeClassName="is-active"
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
