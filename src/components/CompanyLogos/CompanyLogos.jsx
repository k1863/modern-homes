import React from "react";
import companyLogosSprite from "../../svg-icons/company-logos-sprite.svg";

import "../../sass/style.scss";

const CompanyLogos = () => {
  return (
    <div className="company-logos">
      <h3 className="heading-secondary">Our Partners</h3>
      <span>
        <svg className="company-logos__icon">
          <use href={companyLogosSprite + "#real-estate-logo"}></use>
        </svg>
        <svg className="company-logos__icon">
          <use href={companyLogosSprite + "#asian-logo"}></use>
        </svg>
        <svg className="company-logos__icon">
          <use href={companyLogosSprite + "#home-logo"}></use>
        </svg>
        <svg className="company-logos__icon">
          <use href={companyLogosSprite + "#house-logo"}></use>
        </svg>
      </span>
    </div>
  );
};

export default CompanyLogos;
