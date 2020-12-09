import React from "react";

import "../../sass/style.scss";

const HowWeHelp = () => {
  return (
    <div className="how-we-help">
      <div className="how-we-help__img-box">
        <img
          src="https://source.unsplash.com/JvQ0Q5IkeMM/600x820"
          alt="img_help"
          className="how-we-help__img"
          id="hwh-small--img"
        />
      </div>
      <div className="how-we-help__text-box">
        <h2 className="heading-secondary margin-bottom--small">
          How Modern Homes works for you
        </h2>
        <p className="paragraph margin-bottom--small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="how-we-help__text">
          <span className="number-box">01</span>
          <div className="how-we-help__text-details">
            <h3 className="heading-tertiary margin-bottom--small">
              Find a home you want
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo
              at autem placeat quisquam minima enim minus expedita iure nihil.
            </p>
          </div>
        </div>
        <div className="how-we-help__text">
          <span className="number-box">02</span>
          <div className="how-we-help__text-details">
            <h3 className="heading-tertiary margin-bottom--small">
              Sell your home
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo
              at autem placeat quisquam minima enim minus expedita iure nihil.
            </p>
          </div>
        </div>
        <div className="how-we-help__text">
          <span className="number-box">03</span>
          <div className="how-we-help__text-details">
            <h3 className="heading-tertiary margin-bottom--small">
              Find a home you want
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo
              at autem placeat quisquam minima enim minus expedita iure nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
