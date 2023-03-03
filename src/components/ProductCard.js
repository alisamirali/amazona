import React from "react";

const ProductCard = (props) => {
  return (
    <div className="col-2">
      <div className="product-card">
        <div className="product-image">
          <img src={props.imgUrl} className="img-fluid" alt="Card Img" />
        </div>

        <div className="product-content">
          <p className="category">{props.category}</p>
          <h5 className="title">{props.title}</h5>
          <p className="price">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
