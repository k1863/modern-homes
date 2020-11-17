import React from "react";
import sprite from "../../svg-icons/sprites.svg";
import "../../sass/style.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="features__cards-box">
        <div className="features__card">
          <span className="features__icon-box">
            <svg className="features__icon-header">
              <use href={sprite + "#icon-home2"}></use>
            </svg>
          </span>
          <h3 className="heading-tertiary margin-bottom--small">Buy a home</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit.
          </p>
          <div className="features__btn">
            <svg className="right__icon">
              <use href={sprite + "#icon-chevron-small-right"}></use>
            </svg>
          </div>
        </div>

        <div className="features__card">
          <span className="features__icon-box">
            <svg className="features__icon-header">
              <use href={sprite + "#icon-office"}></use>
            </svg>
          </span>
          <h3 className="heading-tertiary margin-bottom--small">Sell a home</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet <br></br> consectetur adipisicing elit.
          </p>
          <div className="features__btn">
            <svg className="right__icon">
              <use href={sprite + "#icon-chevron-small-right"}></use>
            </svg>
          </div>
        </div>

        <div className="features__card">
          <span className="features__icon-box">
            <svg className="features__icon-header">
              <use href={sprite + "#icon-bed"}></use>
            </svg>
          </span>
          <h3 className="heading-tertiary margin-bottom--small">Rent a home</h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet<br></br> consectetur adipisicing elit.
          </p>
          <div className="features__btn">
            <svg className="right__icon">
              <use href={sprite + "#icon-chevron-small-right"}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
