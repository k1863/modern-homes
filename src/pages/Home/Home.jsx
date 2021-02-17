import React from "react";
import Header from "../../components/Header/Header";
import FeaturedHomes from "../../components/FeaturedHomes/FeaturedHomes";
import WeeklyFeatureVideo from "../../components/WeeklyFeatureVideo/WeeklyFeatureVideo";
import Testimonials from "../../components/Testimonials/Testimonials";
import CallToAction from "../../components/CallToAction/CallToAction";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

import "../../sass/style.scss";

const Home = () => {
  return (
    <div className="home">
      <SidebarMenu />
      <Header />
      <FeaturedHomes />
      <WeeklyFeatureVideo />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
