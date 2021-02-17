import React from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import PropertiesCard from "../../components/PropertiesCard/PropertiesCard";
import { NavLink } from "react-router-dom";

import "../../sass/style.scss";

function PropertiesPage({ listings }) {
  console.log(listings[0].mlsId);
  function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase();
    });
  }
  return (
    <div className="properties-page">
      <div className="properties-page__header">
        <h2 className="page-link">
          <NavLink className="nav-link" activeClassName="is-active" to="/">
            Home
          </NavLink>
          / Properties
        </h2>
        <h1 className="heading-primary">Properties</h1>
      </div>
      <SearchComponent />
      <div className="properties-page__grid">
        {listings?.map((property) => (
          <PropertiesCard
            key={property.listingId}
            imgUrl={property.photos[0]}
            address={capitalize(property.address.full)}
            price={property.listPrice}
            bedrooms={property.property.bedrooms}
            bathrooms={property.property.bathsFull}
            size={property.property.area}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertiesPage;
