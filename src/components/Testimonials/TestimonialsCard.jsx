import React from "react";

import "../../sass/style.scss";

const TestimonialsCard = ({ clientName, clientTitle, testimonialsText }) => {
  return (
    <div className="testimonials__card">
      <h3 className="heading-tertiary margin-bottom--small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
      <p className="paragraph margin-bottom--medium">{testimonialsText}</p>
      <h4 className="heading-tertiary margin-top--small">{clientName}</h4>
      <p className="paragraph">{clientTitle}</p>
    </div>
  );
};

export default TestimonialsCard;
