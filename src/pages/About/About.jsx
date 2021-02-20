import React from "react";
import HowWeHelp from "../../components/HowWeHelp/HowWeHelp";
import AboutUs from "../../components/AboutUs/AboutUs";
import CompanyLogos from "../../components/CompanyLogos/CompanyLogos";
import { NavLink } from "react-router-dom";

import "../../sass/style.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h2 className="page-link">
          <NavLink className="nav-link" activeClassName="is-active" to="/">
            Home &nbsp;
          </NavLink>
          / About us
        </h2>
        <h1 className="heading-primary">About us</h1>
      </div>
      <AboutUs />

      <HowWeHelp />
      <CompanyLogos />
    </div>
  );
};

export default About;
