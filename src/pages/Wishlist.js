import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function Wishlist() {
  return (
    <>
      <Meta title="Amazona - Wishlist" />
      <BreadCrumb title="wishlist" />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="Product Card Img"
                />
                <div className="product-card-image d-flex align-items-center justify-content-center">
                  <img
                    src="images/tablet-1.jpg"
                    className="img-fluid"
                    alt="Product Card Img"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">Galaxy Tab A7 Lite 8.7</h5>
                  <h6 className="price">$129</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="Product Card Img"
                />
                <div className="product-card-image d-flex align-items-center justify-content-center">
                  <img
                    src="images/speaker-1.jpg"
                    className="img-fluid"
                    alt="Product Card Img"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">Portable Wireless Speaker</h5>
                  <h6 className="price">$59</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="Product Card Img"
                />
                <div className="product-card-image d-flex align-items-center justify-content-center">
                  <img
                    src="images/mac-1.jpg"
                    className="img-fluid"
                    alt="Product Card Img"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">Apple 2020 MacBook Air</h5>
                  <h6 className="price">$1209</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="Product Card Img"
                />
                <div className="product-card-image d-flex align-items-center justify-content-center">
                  <img
                    src="images/laptop-1.jpg"
                    className="img-fluid"
                    alt="Product Card Img"
                  />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">HP 2022 New 15 Laptop</h5>
                  <h6 className="price mb-2">$479</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
