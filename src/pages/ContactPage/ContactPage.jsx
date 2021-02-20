import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/style.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h2 className="page-link">
          <NavLink className="nav-link" activeClassName="is-active" to="/">
            Home
          </NavLink>
          / Contacts
        </h2>
        <h1 className="heading-primary">Contact us</h1>
      </div>
      <div className="contact-page__details">
        <div className="contact-page__img-wrapper">
          <img
            src="https://rcyneamb.sirv.com/contact-page/pexels-picjumbocom-210647(1).jpg"
            alt="contact-page-img"
            className="contact-page__img"
          />
        </div>
        <div className="contact-page__form">
          <form>
            <h2 className="header-medium">Get in touch</h2>
            <div className="contact-page__inputs">
              <input type="text" className="input" placeholder="Name" />
              <input type="email" className="input" placeholder="Email" />
            </div>

            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="7"
              placeholder="Comment"
            ></textarea>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <button type="submit" className="btn contact-page__btn">
              contact us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
