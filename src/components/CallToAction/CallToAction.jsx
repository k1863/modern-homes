import React from "react";

import "../../sass/style.scss";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="call-to-action__img-box">
        <img
          src="images/apartment-cta.png"
          alt="calltoaction"
          className="call-to-action__img"
        />
      </div>
      <div className="call-to-action__text-box">
        <h2 className="heading-secondary margin-bottom--medium">
          <span>Get</span> your <span>home</span> listed as an owner
        </h2>
        <p className="paragraph margin-bottom--medium">
          Put your email address and get listed
        </p>
        <input
          type="email"
          name="email"
          id="email"
          className="call-to-action__email"
          placeholder="your email"
        />
        <label htmlFor="email" className="call-to-action__label">
          Get Listed
        </label>
      </div>
    </div>
  );
};

export default CallToAction;
