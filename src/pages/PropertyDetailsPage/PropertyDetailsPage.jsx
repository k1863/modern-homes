import React from "react";
import PageHeaderNav from "../../components/PageHeaderNav/PageHeaderNav";
import FormInput from "../../components/FormInput/FormInput";
import "../../sass/style.scss";

function PropertyDetailsPage({ listings, match }) {
  const imageUrl = "https://source.unsplash.com/khpWE85ge38/1800x800";

  const currentListing = listings.find(
    // eslint-disable-next-line eqeqeq
    (listing) => listing.mlsId == match.params.id
  );

  console.log(match.params.id);
  console.log(currentListing);
  return (
    <div className="property-details-page">
      <PageHeaderNav
        className="property-details-page__header"
        imageUrl={imageUrl}
        currentPage="Property Details"
      />
      <div className="property-details-page__wrapper">
        <div className="property-details-page__img-wrapper">
          <img
            src={currentListing.photos[1]}
            alt="property"
            className="property-details-page__img"
          />
        </div>
        <div className="contact-form-wrapper">
          <h2>Contact us for more</h2>
          <form>
            <FormInput
              type="text"
              name="contactName"
              id="contactName"
              placeholder="name"
            />
            <FormInput
              type="email"
              name="contactEmail"
              id="contactEmail"
              placeholder="email"
            />
            <FormInput type="text" placeholder="number" />
            <textarea
              name="comment"
              id="contactComment"
              cols="20"
              rows="10"
            ></textarea>
            <button className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsPage;
