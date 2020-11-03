import React from "react";
import { ReactComponent as Logo } from "../../modern-homes-logo.svg";
import "../../sass/style.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo-box">
        <Logo />
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">Home</li>
        <li className="navigation__item">About Us</li>
        <li className="navigation__item">Properties</li>
        <li className="navigation__item push">Agents</li>
        <li className="navigation__item">Blog</li>
        <li className="navigation__item">Contact</li>
      </ul>
    </div>
  );
};

export default Navigation;
