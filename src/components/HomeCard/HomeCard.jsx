import React from "react";
import sprite from "../../svg-icons/sprite.svg";

import "../../sass/style.scss";

const HomeCard = ({
  imgUrl,
  propertyName,
  price,
  bedrooms,
  bathrooms,
  size,
}) => {
  return (
    <div
      className="featured-homes__card"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="featured-homes__card-content">
        <h3 className="heading-tertiary">{propertyName}</h3>
        <span className="featured-homes__price-box">
          <span className="featured-homes__price">{price}</span>/month
        </span>
        <div className="featured-homes__details">
          <span className="featured-homes__item">
            <svg className="features__icon">
              <use href={sprite + "#icon-bed"}></use>
            </svg>
            {bedrooms}
          </span>
          <span className="featured-homes__item">
            <svg className="features__icon">
              <use href={sprite + "#icon-bath"}></use>
            </svg>
            {bathrooms}
          </span>
          <span className="featured-homes__item">
            <svg className="features__icon">
              <use href={sprite + "#icon-crop_free"}></use>
            </svg>
            {size}
          </span>
        </div>
      </div>

      {/*  <div className="featured-homes__contacts">
        <span className="btn-details">View details</span>
        <span className="featured-homes__icon-detail">
          <svg className="features__icon-detail">
            <use href={sprite + "#icon-mail"}></use>
          </svg>
        </span>
        <span className="featured-homes__icon-detail">
          <svg className="features__icon-detail">
            <use href={sprite + "#icon-phone"}></use>
          </svg>
        </span>
  </div> */}
    </div>
  );
};

export default HomeCard;
