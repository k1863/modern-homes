import React from "react";
import sprite from "../../svg-icons/sprites.svg";
import SelectComponent from "../SelectComponent/SelectComponent";

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
        <form action="">
          <div className="form__radios">
            <div className="form__radio-group">
              <input
                type="radio"
                className="form__radio-input"
                id="small"
                name="group-size"
                checked
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
                Rent
              </label>
            </div>
          </div>

          <div className="form__search-group">
            <SelectComponent />
            <div className="select-opts">
              {/* <select
                id="house-types"
                name="cars"
                className="form__select--type opt1"
              >
                <option value="residential">residential</option>
                <option value="commercial">commercial</option>
                <option value="industrial">industrial</option>
              </select> */}
              <input
                className="form__search--location"
                type="search"
                id="search-location"
                onFocus='this.value = ""'
                name="location"
                placeholder="Search by street name or city"
              />
            </div>

            <button className="search_btn" type="submit">
              <svg className="search-icon">
                <use href={sprite + "#icon-search"}></use>
              </svg>
              search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
