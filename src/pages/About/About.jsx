import React from "react";
import HowWeHelp from "../../components/HowWeHelp/HowWeHelp";
import AboutUs from "../../components/AboutUs/AboutUs";
import CompanyLogos from "../../components/CompanyLogos/CompanyLogos";
import PageHeaderNav from "../../components/PageHeaderNav/PageHeaderNav";

import "../../sass/style.scss";

const About = () => {
  const imageUrl = "https://source.unsplash.com/khpWE85ge38/1800x800";
  return (
    <div className="about-page">
      <PageHeaderNav currentPage="About us" imageUrl={imageUrl} />
      <AboutUs />

      <HowWeHelp />
      <CompanyLogos />
    </div>
  );
};

export default About;
