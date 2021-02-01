import React from "react";

import sprites from "../../svg-icons/sprites.svg";

import "../../sass/style.scss";

const PropertiesCard = ({
  imgUrl,
  address,
  bedrooms,
  bathrooms,
  price,
  size,
}) => {
  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");

  return (
    <div className="properties-card">
      <div className="properties-card__img-box">
        <img src={imgUrl} alt="property" className="properties-card__img" />
      </div>
      <div className="properties-card--footer">
        <h3>{address}</h3>
        <div className="properties-card__item">
          <span className="properties-card__price">${format(price)}</span>
        </div>
        <div className="properties-card__details">
          <span className="properties-card__item">
            <svg className="property-card__icon">
              <use href={sprites + "#icon-bed"}></use>
            </svg>
            0{bedrooms} Bed
          </span>
          <span className="properties-card__item">
            <svg className="property-card__icon">
              <use href={sprites + "#icon-bath"}></use>
            </svg>
            0{bathrooms} Bath
          </span>
          <span className="properties-card__item">
            <svg className="property-card__icon">
              <use href={sprites + "#icon-photo_size_select_small"}></use>
            </svg>
            {size}
          </span>
        </div>
        <div className="properties-card__contacts">
          <button className="btn">View Details</button>
          <span className="properties-card__item icon-bg">
            <svg className="property-card__icon icon-contact">
              <use href={sprites + "#icon-email"}></use>
            </svg>
          </span>
          <span className="properties-card__item icon-bg">
            <svg className="property-card__icon icon-contact">
              <use href={sprites + "#icon-phone"}></use>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
