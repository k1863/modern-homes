import React from "react";
import "../../sass/style.scss";
import { NavLink } from "react-router-dom";
import AgentsCard from "../../components/AgentsCard/AgentsCard";

const AgentsPage = ({ listings }) => {
  const topLists = listings.slice(-8);
  const agentImages = [
    "https://rcyneamb.sirv.com/Agents/pexels-linkedin-sales-navigator-2182970.jpg",
    "https://rcyneamb.sirv.com/Agents/pexels-pixabay-220453.jpg",
    "https://rcyneamb.sirv.com/Agents/pexels-pixabay-532220.jpg",
    "https://rcyneamb.sirv.com/Agents/man-537136_6401.jpg",
    "https://rcyneamb.sirv.com/Agents/application-1934972_1280.jpg",
    "https://rcyneamb.sirv.com/Agents/businessman-805770_640.jpg",
    "https://rcyneamb.sirv.com/Agents/assistant-18993_1280.jpg",
    "https://rcyneamb.sirv.com/Agents/businessman-1247947_1920.jpg",
  ];

  const roles = [
    "Seller",
    "Seller Agency",
    "Real Estate Broker",
    "Seller",
    "Seller",
    "Seller Agency",
    "Real Estate Broker",
    "Seller Agency",
  ];

  let newListings = listings
    .slice(-8)
    .map((toplist, index) => (toplist.agent.imgUrl = agentImages[index]));

  console.log(newListings);

  console.log(topLists);

  return (
    <div className="agents-page">
      <div className="page-header">
        <h2 className="page-link">
          <NavLink className="nav-link" activeClassName="is-active" to="/">
            Home &nbsp;
          </NavLink>
          / Agents
        </h2>
        <h1 className="heading-primary">Agents</h1>
      </div>
      <div className="agents-page__card-items">
        {topLists?.map((listing, index) => (
          <AgentsCard
            key={listing?.listingId}
            listing={listing}
            index={index}
            roles={roles}
            agentImages={agentImages}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
