import React from "react";
import "../../sass/style.scss";

const AgentsCard = ({ listing, index, roles }) => {
  const { imgUrl, firstName, lastName } = listing.agent;
  return (
    <div className="agents-card">
      <div
        className="agents-card__img-box"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <h3 className="agents-card__name">
        {firstName} {lastName}
      </h3>
      <p className="agents-card__title">{roles[index]}</p>
    </div>
  );
};

export default AgentsCard;
