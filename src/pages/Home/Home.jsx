import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Features from "../../components/Features/Features";
import FeaturedHomes from "../../components/FeaturedHomes/FeaturedHomes";
import HowWeHelp from "../../components/HowWeHelp/HowWeHelp";
import AboutUs from "../../components/AboutUs/AboutUs";
import PropertiesSearchBox from "../../components/PropertiesSearch/PropertiesSearchBox";
import WeeklyFeatureVideo from "../../components/WeeklyFeatureVideo/WeeklyFeatureVideo";
import Testimonials from "../../components/Testimonials/Testimonials";

import "../../sass/style.scss";
import CallToAction from "../../components/CallToAction/CallToAction";


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
      <WeeklyFeatureVideo />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
