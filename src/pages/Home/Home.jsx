import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import "../../sass/style.scss";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Header />
    </div>
  );
};

export default Home;
