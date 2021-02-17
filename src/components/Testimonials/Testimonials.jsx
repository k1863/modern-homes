import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { Fade } from "react-slideshow-image";

import sprite from "../../svg-icons/sprite.svg";

import "../../sass/style.scss";

const images = [
  "images/client-1.jpg",
  "images/client-2.jpg",
  "images/client-3.jpg",
];

/* const images2 = [
  "images/client-1s.jpg",
  "images/client-2s.jpg",
  "images/client-3s.jpg",
]; */

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  prevArrow: (
    <span className="testimonials__west-btn">
      <svg className="testimonials__icon">
        <use href={sprite + "#chevron-circle-left"}></use>
      </svg>
    </span>
  ),
  nextArrow: (
    <span className="testimonials__east-btn">
      <svg className="testimonials__icon">
        <use href={sprite + "#chevron-circle-right"}></use>
      </svg>
    </span>
  ),
  /* indicators: (i) => (
    <div className="testimonials__client-avatars-box indicator">
      <img
        src={images2[i]}
        alt="client-avatar"
        className="testimonials__client-avatar"
      />
    </div>
  ), */
};

const Testimonials = ({ clientName, clientTitle, imgUrl }) => {
  const testimonials = [
    ` Ac turpis egestas sed tempus urna. 
     Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.
     Suspendisse in est ante in nibh mauris cursus mattis molestie.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. `,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque
     vitae tempus quam pellentesque nec.`,
  ];
  return (
    <div className="testimonials">
      <h2 className="heading-secondary margin-bottom--big">
        What our clients are saying
      </h2>
      <div className="testimonials__client--reviews-box">
        <Fade {...fadeProperties}>
          <div className="testimonials__client--img-box">
            <img
              src={images[0]}
              alt="client"
              className="testimonials__client--img"
              id="client-img1"
            />
            <TestimonialsCard
              clientName="Eric Limpopo"
              clientTitle="Business Developer"
              testimonialsText={testimonials[0]}
            />
          </div>
          <div className="testimonials__client--img-box">
            <img
              src={images[1]}
              alt="client"
              className="testimonials__client--img"
              id="client-img2"
            />
            <TestimonialsCard
              clientName="Brad Gibson"
              clientTitle="Marketing Consultant"
              testimonialsText={testimonials[1]}
            />
          </div>
          <div className="testimonials__client--img-box">
            <img
              src={images[2]}
              alt="client"
              className="testimonials__client--img"
              id="client-img3"
            />
            <TestimonialsCard
              clientName="Jean Marie"
              clientTitle="Human Resource Lead"
              testimonialsText={testimonials[2]}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Testimonials;
