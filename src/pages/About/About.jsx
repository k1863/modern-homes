import React from "react";
import HowWeHelp from "../../components/HowWeHelp/HowWeHelp";
import AboutUs from "../../components/AboutUs/AboutUs";
import CompanyLogos from "../../components/CompanyLogos/CompanyLogos";

import "../../sass/style.scss";

const About = () => {
  return (
    <div className="about-page">
      <AboutUs />

      <HowWeHelp />
      <CompanyLogos />
    </div>
  );
};

export default About;
