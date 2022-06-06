import React from "react";
import './product-card.css';


const ProductCard = (props) => {

    const {title , imgUrl ,price} = props.item

  return (
    <div>
      <div className="single__product">
        <div className="product__img">
          <img src={imgUrl} alt={title} className="w-100" />
        </div>
        <div className="product__content">
          <div className="rating">
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
          </div>
          <h6>{title}</h6>

          <div className="d-flex align-items-center jusrify-center-between">
            <span className="price d-flex align-items-center">
              {''}
              Price : $<span>{price}</span>
            </span>
            <span className="shopping__icon">
              <i className="ri-shopping-cart-line"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
