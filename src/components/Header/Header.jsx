import React from "react";
import SearchComponent from "../SearchComponent/SearchComponent";

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
      <SearchComponent />
    </div>
  );
};

export default Header;
