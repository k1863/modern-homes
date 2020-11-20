import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Features from "../../components/Features/Features";
import FeaturedHomes from "../../components/FeaturedHomes/FeaturedHomes";
import HowWeHelp from "../../components/HowWeHelp/HowWeHelp";
import AboutUs from "../../components/AboutUs/AboutUs";
import PropertiesSearchBox from "../../components/PropertiesSearch/PropertiesSearchBox";

import "../../sass/style.scss";


const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Header />
      <Features />
      <FeaturedHomes />
      <HowWeHelp />
      <AboutUs />
      <PropertiesSearchBox />
    </div>
  );
};

export default Home;
