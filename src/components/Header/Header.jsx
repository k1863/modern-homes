import React from "react";
import sprite from "../../svg-icons/sprites.svg";
import "../../sass/style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          Find a home that's <br></br> perfect for you
        </h1>
        <p className="heading-paragraph  margin-top--small">
          Explore opportunities to live and work better in a new home.
        </p>
      </div>
      <div className="form__header">
        <div className="form__radios margin-top--big">
          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              id="small"
              name="group-size"
            />
            <label htmlFor="small" className="form__radio-label">
              <span className="form__radio-button"></span>
              Buy
            </label>
          </div>
          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              id="large"
              name="group-size"
            />
            <label htmlFor="large" className="form__radio-label">
              <span className="form__radio-button"></span>
              Sell
            </label>
          </div>
        </div>

        <div className="form__search-group">
          <input
            className="form__search--location"
            type="search"
            id="search-location"
            name="location"
            placeholder="Search location"
          />
          <select id="house-types" name="cars" className="form__select--type">
            <option value="residential">residential</option>
            <option value="commercial">commercial</option>
            <option value="industrial">industrial</option>
          </select>
          <select
            id="currency-types"
            name="currency"
            className="form__select--type"
          >
            <option value="usd">USD</option>
            <option value="euro">EURO</option>
            <option value="gbp">GBP</option>
          </select>
          <button className="search_btn" type="submit">
            <svg className="search-icon">
              <use href={sprite + "#icon-shopping-cart"}></use>
            </svg>
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
