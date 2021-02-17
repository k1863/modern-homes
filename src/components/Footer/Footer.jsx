import React from "react";
import { ReactComponent as Logo } from "../../modern-homes-logo.svg";
import sprites from "../../svg-icons/sprites.svg";
import paymentSprite from "../../svg-icons/payments-sprite.svg";
import "../../sass/style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo-box">
        <Logo className="footer__logo" />
        <p className="paragraph margin-top--small">
          We are commited to helping you find the perfect home
        </p>
        <span className="footer__payment">
          <svg className="footer__icon">
            <use href={paymentSprite + "#mastercard"}></use>
          </svg>
          <svg className="footer__icon" id="paypal-icon">
            <use href={paymentSprite + "#paypal"}></use>
          </svg>
          <svg className="footer__icon">
            <use href={paymentSprite + "#visa"}></use>
          </svg>
        </span>
      </div>
      <div className="footer__support">
        <h3 className="heading-tertiary margin-bottom--small">Support</h3>
        <ul className="footer__list">
          <li className="footer__item">Help Videos</li>
          <li className="footer__item">Accessories</li>
          <li className="footer__item">Support</li>
          <li className="footer__item">View Booking</li>
          <li className="footer__item">Features</li>
        </ul>
      </div>
      <div className="footer__service">
        <h3 className="heading-tertiary margin-bottom--small">Service</h3>
        <ul className="footer__list">
          <li className="footer__item">Payment and tax</li>
          <li className="footer__item">Accessories</li>
          <li className="footer__item">Support</li>
          <li className="footer__item">View Booking</li>
          <li className="footer__item">Features</li>
        </ul>
      </div>
      <div className="footer__about">
        <h3 className="heading-tertiary margin-bottom--small">About</h3>
        <ul className="footer__list">
          <li className="footer__item">About Us</li>
          <li className="footer__item">Announcements</li>
          <li className="footer__item">Contact</li>
          <li className="footer__item">News</li>
          <li className="footer__item">Features</li>
        </ul>
      </div>
      <div className="footer__address">
        <h3 className="heading-tertiary margin-bottom--small">Our Address</h3>
        <address>
          876 Lake Forest Dr. Haines City,<br></br> FL 33844{" "}
        </address>
        <span className="footer__social-icons">
          <svg className="right__icon">
            <use href={sprites + "#icon-facebook"}></use>
          </svg>
          <svg className="right__icon">
            <use href={sprites + "#icon-twitter"}></use>
          </svg>
          <svg className="right__icon">
            <use href={sprites + "#icon-instagram"}></use>
          </svg>
          <svg className="right__icon">
            <use href={sprites + "#icon-pinterest"}></use>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Footer;
