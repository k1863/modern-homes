import React from "react";
import { withRouter } from "react-router-dom";

import sprites from "../../svg-icons/sprites.svg";
import sprite2 from "../../svg-icons/sprite2.svg";

import "../../sass/style.scss";

const PropertiesCard = ({
  imgUrl,
  address,
  bedrooms,
  bathrooms,
  price,
  size,
  property,
  history,
  match,
}) => {
  const format = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");
  /*   const handleClick = () => {
    console.log(property.mlsId);
  }; */
  return (
    <div className="properties-card">
      <div
        className="properties-card__img-box"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <svg className="properties-card__icon heart">
          <use href={sprite2 + "#heart"}></use>
        </svg>
      </div>
      <div className="properties-card--footer">
        <h3>{address}</h3>
        <div className="properties-card__item">
          <span className="properties-card__price">${format(price)}</span>
        </div>
        <div className="properties-card__details">
          <span className="properties-card__item">
            <svg className="properties-card__icon">
              <use href={sprites + "#icon-bed"}></use>
            </svg>
            0{bedrooms} Bed
          </span>
          <span className="properties-card__item">
            <svg className="properties-card__icon">
              <use href={sprites + "#icon-bath"}></use>
            </svg>
            0{bathrooms} Bath
          </span>
          <span className="properties-card__item">
            <svg className="properties-card__icon">
              <use href={sprites + "#icon-photo_size_select_small"}></use>
            </svg>
            {size} SQ
          </span>
        </div>
        <div className="properties-card__contacts">
          <button
            onClick={() => {
              history.push(`${match.url}/${property.mlsId}`);
              console.log(match.url);
            }}
            className="btn"
          >
            View Details
          </button>
          <span className="properties-card__item icon-bg">
            <svg className="properties-card__icon icon-contact">
              <use href={sprites + "#icon-email"}></use>
            </svg>
          </span>
          <span className="properties-card__item icon-bg">
            <svg className="properties-card__icon icon-contact">
              <use href={sprites + "#icon-phone"}></use>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PropertiesCard);
