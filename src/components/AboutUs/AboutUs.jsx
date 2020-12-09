import React from "react";

import "../../sass/style.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__text-box">
        <h2 className="heading-secondary margin-bottom--medium">
          We are the most reliable<br></br> agency in your area
        </h2>
        <p className="paragraph margin-bottom--medium">
          Eget est lorem ipsum dolor sit amet consectetur. Arcu odio ut sem
          nulla pharetra diam sit amet. Blandit aliquam etiam erat velit
          scelerisque in dictum.
          <br></br>
          <br></br>
          Adipiscing bibendum est ultricies integer quis auctor elit sed. Morbi
          tincidunt ornare massa eget. Vestibulum rhoncus est pellentesque elit.
        </p>
        <button className="btn">Learn more &#8594;</button>
      </div>
      <div className="about-us__img-box">
        <img
          src="https://source.unsplash.com/vGgn0xLdy8s/600x820"
          alt="img_help"
          id="about-us__small-img"
          className="about-us__img"
        />
      </div>
    </div>
  );
};

export default AboutUs;
