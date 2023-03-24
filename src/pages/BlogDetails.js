import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BlogDetails = () => {
  return (
    <>
      <Meta title="Amazon - Blog" />
      <BreadCrumb title="Single Blog" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog">
                  <BsArrowLeft className="fs-5" />
                  Back To Blog
                </Link>
                <h3 className="title">
                  Amazona helps employees learn and earn
                </h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="Single Blog"
                />
                <p>
                  They get exclusive deals on select everyday favorites,
                  essentials, prepared foods, and more at Amazon Fresh
                  stores—and a discount off hundreds of sale items, and
                  exclusive deals on select products at Whole Foods Market
                  stores. To access these savings, find the “in-store code” on
                  the homepage of the Amazon app to scan at check-out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
