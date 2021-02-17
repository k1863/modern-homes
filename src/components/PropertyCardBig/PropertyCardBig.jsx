import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import "../../sass/style.scss";

const PropertyCardBig = ({ imgUrl, price, baths, bedrooms, size, address }) => {
  return (
    <div
      className="property-card--big"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="property-card--big__text-box">
        <h3 className="">{address}</h3>
        <div className="property-card--big__details">
          <span className="property-card--big__price">{price}</span>
          <span className="property-card--big__item">
            <svg className="property-card--big__icon">
              <use href={sprite + "#icon-bed"}></use>
            </svg>
            {bedrooms}
          </span>
          <span className="property-card--big__item">
            <svg className="property-card--big__icon">
              <use href={sprite + "#icon-bath"}></use>
            </svg>
            {baths}
          </span>
          <span className="property-card--big__item">
            <svg className="property-card--big__icon">
              <use href={sprite + "#icon-crop_free"}></use>
            </svg>
            {size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardBig;
