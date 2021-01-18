import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import locationSprite from "../../svg-icons/sprite.svg";

import "../../sass/style.scss";

const PropertiesCard = ({
  imgUrl,
  address,
  bedrooms,
  bathrooms,
  price,
  location,
}) => {
  return (
    <div className="properties-card">
      <div className="properties-card__img-box">
        <img src={imgUrl} alt="property" className="properties-card__img" />
      </div>
      <h3 className="heading-tertiary margin-bottom--small margin-top--small">
        {address}
      </h3>
      <div className="properties-card__details">
        <span className="properties-card__item">
          <svg className="property-card__icon">
            <use href={sprite + "#icon-bed"}></use>
          </svg>
          {bedrooms}
        </span>
        <span className="properties-card__item">
          <svg className="property-card__icon">
            <use href={sprite + "#icon-bath"}></use>
          </svg>
          {bathrooms}
        </span>
        <div className="properties-card__item">
          <span className="properties-card__price">{price}</span>/month
        </div>
      </div>
      <div className="properties-card__location-box">
        <span className="properties-card__location">
          <svg className="property-card__icon">
            <use href={locationSprite + "#icon-location2"}></use>
          </svg>
          {location}
        </span>
        <span className="btn-location">&rarr;</span>
      </div>
    </div>
  );
};

export default PropertiesCard;
