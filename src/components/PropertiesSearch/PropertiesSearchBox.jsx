import React from "react";
import sprite from "../../svg-icons/sprite-properties.svg";
import PropertiesCard from "../PropertiesCard/PropertiesCard";
import "../../sass/style.scss";

const PropertiesSearchBox = () => {
  return (
    <div className="properties-search">
      <h2 className="heading-secondary margin-bottom--big margin-top--big">
        Popular Searches
      </h2>
      <div className="properties-search__icon-box margin-bottom--big">
        <span className="properties-search__icon-text">
          <svg className="properties-search__icon">
            <use href={sprite + "#apartment"}></use>
          </svg>
          Apartments for rent
        </span>

        <span className="properties-search__icon-text">
          <svg className="properties-search__icon">
            <use href={sprite + "#bed"}></use>
          </svg>
          Search by quantity of rooms
        </span>
        <span className="properties-search__icon-text">
          <svg className="properties-search__icon">
            <use href={sprite + "#loan"}></use>
          </svg>
          Property for sale
        </span>

        <span className="properties-search__icon-text">
          <svg className="properties-search__icon">
            <use href={sprite + "#employee"}></use>
          </svg>
          Office space
        </span>
        <span className="btn-text">&rarr; Explore All</span>
      </div>

      <div className="properties-search-box">
        <PropertiesCard
          imgUrl="https://source.unsplash.com/R-w5Q-4Mqm0/800x600"
          address="942 Addison Circle"
          price="$3550"
          bedrooms="05"
          bathrooms="04"
          location="Delaware, OH 43015"
        />

        <PropertiesCard
          imgUrl="https://source.unsplash.com/L7EwHkq1B2s/800x600"
          address="9193 Redwood Dr."
          price="$3550"
          bedrooms="05"
          bathrooms="04"
          location="North Haven, CT 06473"
        />
        <PropertiesCard
          imgUrl="https://source.unsplash.com/9uH-hM0VwPg/800x600"
          address="7091 Mulberry Court"
          price="$3550"
          bedrooms="05"
          bathrooms="04"
          location="Lumberton, NC 28358"
        />
        <PropertiesCard
          imgUrl="https://source.unsplash.com/4HG3Ca3EzWw/800x600"
          address="235 Pennington St."
          price="$3550"
          bedrooms="05"
          bathrooms="04"
          location="Portland, ME 04103"
        />
      </div>
    </div>
  );
};

export default PropertiesSearchBox;
