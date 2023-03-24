import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <>
      <Meta title="Amazona - Product" />
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">Left</div>
            <div className="col-6">Right</div>
          </div>
        </div>
      </div>

      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-4">
                <h4>Description</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title">Our Popular Products</h3>
            </div>
          </div>

          <div className="row d-flex">
            <ProductCard
              imgUrl="/images/watch.jpg"
              category="Smart Watches"
              title="Round Face 2023"
              price="$39"
              rate={3}
            />
            <ProductCard
              imgUrl="/images/headphone.jpg"
              category="Headphones"
              title="Beats Solo3"
              price="$119"
              rate={3}
            />
            <ProductCard
              imgUrl="/images/homeapp.jpg"
              category="Kitchen Tools"
              title="BUYDEEM Toaster"
              price="$72"
              rate={5}
            />
            <ProductCard
              imgUrl="/images/speaker.jpg"
              category="Speakers"
              title="Portable Speaker"
              price="$25"
              rate={4}
            />
            <ProductCard
              imgUrl="/images/acc.jpg"
              category="Buds"
              title="Studio Buds"
              price="$55"
            />
            <ProductCard
              imgUrl="/images/laptop.jpg"
              category="Laptops"
              title="MacBook Pro"
              price="$2000"
              rate={5}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
