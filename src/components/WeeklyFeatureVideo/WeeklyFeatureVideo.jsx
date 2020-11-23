import React from "react";

import sprite from "../../svg-icons/sprite.svg";
import featureVideo from "../../videos/featured-house.mp4";

import "../../sass/style.scss";

const WeeklyFeatureVideo = () => {
  return (
    <div className="feature-video">
      <div className="feature-video__head">
        <div className="feature-video__text-box">
          <h2 className="heading-secondary margin-bottom--medium ">
            Best house of the week
          </h2>
          <p className="paragraph margin-bottom--medium feature-video__sub-head">
            Modern trendy home design worth <span>$2.3million</span>
          </p>
        </div>
        <button className="btn feature-video__btn">Explore more &#8594;</button>
      </div>
      <div className="feature-video__video-box">
        <video
          width="600"
          controls
          autoPlay="true"
          className="feature-video__video"
        >
          <source src={featureVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="feature-video__details">
        <span className="feature-video__item">
          <svg className="feature-video__icon">
            <use href={sprite + "#icon-crop_free"}></use>
          </svg>
          500<sup>M2</sup>
        </span>
        <span className="feature-video__item">
          <svg className="feature-video__icon">
            <use href={sprite + "#icon-home"}></use>
          </svg>
          Garage<sup>4 cars</sup>
        </span>
        <span className="feature-video__item">
          <svg className="feature-video__icon">
            <use href={sprite + "#icon-pool"}></use>
          </svg>
          Pool<sup>40 M2</sup>
        </span>
        <span className="feature-video__item">
          <svg className="feature-video__icon">
            <use href={sprite + "#icon-video-camera"}></use>
          </svg>
          Security<sup>24 HR</sup>
        </span>
      </div>
    </div>
  );
};

export default WeeklyFeatureVideo;
