import React from "react";
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
      <div className="form__radios margin-top--big">
        <ul className="form__radio-group">
          <li className="form__radio-item">
            <input
              type="radio"
              id="buy_property"
              name="buy_property"
              value="buy_property"
              className="form__radio-input"
              checked="checked"
            />
            <label for="buy_property" className="form__radio-label">
              Buy
            </label>
            <div class="check"></div>
          </li>
          <li className="form__radio-item">
            <input
              type="radio"
              id="sell_property"
              name="sell_property"
              value="sell_property"
              className="form__radio-input"
            />
            <label for="sell_property" className="form__radio-label">
              Sell
            </label>
            <div class="check">
              <div class="inside"></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="form__search-group"></div>
    </div>
  );
};

export default Header;
