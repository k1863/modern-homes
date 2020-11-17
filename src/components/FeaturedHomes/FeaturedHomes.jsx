import React from "react";
import sprite from "../../svg-icons/sprite.svg";
import "../../sass/style.scss";

const FeaturedHomes = () => {
  return (
    <div className="featured-homes">
      <div className="featured-homes__head">
        <h2 className="heading-secondary">Featured homes for rent</h2>
        <span className="featured-homes__link-box">
          <a href="#featured-homes" className="featured-homes__link">
            All Recent Properties
          </a>
          <svg className="features__icon">
            <use href={sprite + "#icon-chevron-right"}></use>
          </svg>
        </span>
      </div>
      <div className="featured-homes__cards-box">
        <div className="featured-homes__card">
          <div className="featured-homes__card--image-box">
            <img
              src=" https://source.unsplash.com/koH7IVuwRLw/800x600"
              alt="home1"
              className="featured-homes__card-image"
            />
          </div>
          <h3 className="heading-tertiary">5412 Talbot St. Bridge, NJ 0587</h3>
          <span className="featured-homes__price">$245/mo</span>
          <div className="featured-homes__details">
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-bed"}></use>
              </svg>
              05 bed
            </span>
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-bath"}></use>
              </svg>
              04 bath
            </span>
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-crop_free"}></use>
              </svg>
              1256 sq
            </span>
          </div>
          <div className="featured-homes__contacts">
            <span className="btn-details">View details</span>
            <span className="featured-homes__icon-detail">
              <svg className="features__icon-detail">
                <use href={sprite + "#icon-mail"}></use>
              </svg>
            </span>
            <span className="featured-homes__icon-detail">
              <svg className="features__icon-detail">
                <use href={sprite + "#icon-phone"}></use>
              </svg>
            </span>
          </div>
        </div>

        <div className="featured-homes__card">
          <div className="featured-homes__card--image-box">
            <img
              src="https://source.unsplash.com/L7EwHkq1B2s/800x600"
              alt="home1"
              className="featured-homes__card-image"
            />
          </div>
          <h3 className="heading-tertiary">5412 Talbot St. Bridge, NJ 0587</h3>
          <span className="featured-homes__price">$245/mo</span>
          <div className="featured-homes__details">
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-bed"}></use>
              </svg>
              05 bed
            </span>
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-bath"}></use>
              </svg>
              04 bath
            </span>
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-crop_free"}></use>
              </svg>
              1256 sq
            </span>
          </div>
          <div className="featured-homes__contacts">
            <span className="btn-details">View details</span>
            <span className="featured-homes__icon-detail">
              <svg className="features__icon-detail">
                <use href={sprite + "#icon-mail"}></use>
              </svg>
            </span>
            <span className="featured-homes__icon-detail">
              <svg className="features__icon-detail">
                <use href={sprite + "#icon-phone"}></use>
              </svg>
            </span>
          </div>
        </div>

        <div className="featured-homes__card">
          <div className="featured-homes__card--image-box">
            <img
              src="https://source.unsplash.com/MP0bgaS_d1c/800x600"
              alt="home1"
              className="featured-homes__card-image"
            />
          </div>
          <h3 className="heading-tertiary">5412 Talbot St. Bridge, NJ 0587</h3>
          <span className="featured-homes__price">$245/mo</span>
          <div className="featured-homes__details">
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-bed"}></use>
              </svg>
              05 bed
            </span>
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-bath"}></use>
              </svg>
              04 bath
            </span>
            <span className="featured-homes__item">
              <svg className="features__icon">
                <use href={sprite + "#icon-crop_free"}></use>
              </svg>
              1256 sq
            </span>
          </div>
          <div className="featured-homes__contacts">
            <span className="btn-details">View details</span>
            <span className="featured-homes__icon-detail">
              <svg className="features__icon-detail">
                <use href={sprite + "#icon-mail"}></use>
              </svg>
            </span>
            <span className="featured-homes__icon-detail">
              <svg className="features__icon-detail">
                <use href={sprite + "#icon-phone"}></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHomes;
