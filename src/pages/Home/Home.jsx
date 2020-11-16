import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Features from "../../components/Features/Features";

import "../../sass/style.scss";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Header />
      <Features />
    </div>
  );
};

export default Home;
