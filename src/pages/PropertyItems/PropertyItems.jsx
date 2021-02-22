import React from "react";
import PropertiesCard from "../../components/PropertiesCard/PropertiesCard";
import "../../sass/style.scss";

function PropertyItems({ listings, capitalize }) {
  return (
    <div className="properties-items__grid">
      {listings?.map((property) => (
        <PropertiesCard
          key={property.listingId}
          imgUrl={property.photos[0]}
          address={capitalize(property.address.full)}
          price={property.listPrice}
          bedrooms={property.property.bedrooms}
          bathrooms={property.property.bathsFull}
          size={property.property.area}
          property={property}
        />
      ))}
    </div>
  );
}

export default PropertyItems;
