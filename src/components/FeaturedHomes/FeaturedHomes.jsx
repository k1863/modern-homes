import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import PropertiesCard from "../PropertiesCard/PropertiesCard";
import PropertyCardBig from "../PropertyCardBig/PropertyCardBig";

import "../../sass/style.scss";

const FeaturedHomes = () => {
  return (
    <div className="featured-homes">
      <div className="featured-homes__head">
        <h2 className="heading-secondary">Featured homes for rent</h2>
        <span className="featured-homes__link-box">
          <a href="#featured-homes" className="featured-homes__link">
            All Recent Properties
          </a>
          <svg className="features__icon">
            <use href={sprite + "#icon-chevron-right"}></use>
          </svg>
        </span>
      </div>
      <div className="featured-homes__cards-box">
        <div className="property-card--box">
          <PropertyCardBig
            className="property-card--big card-1"
            address="422 Atlantic Lane Alliance, OH 44601"
            baths=" 03"
            size="2350sq"
            price="$2540/mo"
            bedrooms="04"
            imgUrl="https://source.unsplash.com/2gDwlIim3Uw/900x700"
          />
          <PropertyCardBig
            className="property-card--big card-2"
            address="545 Front Dr.Thornton, CO 80241"
            baths=" 03"
            price="$2540/mo"
            bedrooms="04"
            size="2450sq"
            imgUrl="https://source.unsplash.com//_TPTXZd9mOo/900x600"
          />
        </div>
        <div className="home-card__box">
          <PropertiesCard
            imgUrl="https://source.unsplash.com/L7EwHkq1B2s/800x600"
            address="9193 Redwood Dr."
            price="$3550"
            bedrooms="05"
            bathrooms="04"
            size="North Haven, CT 06473"
          />
          <PropertiesCard
            imgUrl="https://source.unsplash.com/9uH-hM0VwPg/800x600"
            address="7091 Mulberry Court"
            price="$3550"
            bedrooms="05"
            bathrooms="04"
            size="Lumberton, NC 28358"
          />
          <PropertiesCard
            imgUrl="https://source.unsplash.com/4HG3Ca3EzWw/800x600"
            address="235 Pennington St."
            price="$3550"
            bedrooms="05"
            bathrooms="04"
            size="Portland, ME 04103"
          />
          {/*  <HomeCard
            imgUrl="https://source.unsplash.com/6sDuV840wxs/600x1000"
            propertyName="5412 Talbot St. Bridge, NJ 0587"
            price="$2245"
            bedrooms="05 bed"
            bathrooms="04 bath"
            size="1256 sq"
          /> */}
          {/*  <HomeCard
            imgUrl="https://source.unsplash.com/L7EwHkq1B2s/800x600"
            propertyName="4352 City Way Manhattan, NY 0587"
            price="$3245"
            bedrooms="03 bed"
            bathrooms="02 bath"
            size="2247 sq"
          />
          <HomeCard
            imgUrl="https://source.unsplash.com/MP0bgaS_d1c/800x600"
            propertyName="1312 Brooklyn avenue Los Angeles, CA 0587"
            price="$3550"
            bedrooms="05 bed"
            bathrooms="04 bath"
            size="2256 sq"
         /> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHomes;
