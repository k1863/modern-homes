import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import "../../sass/style.scss";

const PropertyCardBig = ({ imgUrl, price, baths, bedrooms, size, address }) => {
  return (
    <div
      className="property-card"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="property-card__text-box">
        <h3 className="">{address}</h3>
        <div className="property-card__details">
          <span className="property-card__price">{price}</span>
          <span className="property-card__item">
            <svg className="property-card__icon">
              <use href={sprite + "#icon-bed"}></use>
            </svg>
            {bedrooms}
          </span>
          <span className="property-card__item">
            <svg className="property-card__icon">
              <use href={sprite + "#icon-bath"}></use>
            </svg>
            {baths}
          </span>
          <span className="property-card__item">
            <svg className="property-card__icon">
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
