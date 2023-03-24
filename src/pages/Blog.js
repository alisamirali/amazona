import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";

function Blogs() {
  return (
    <>
      <Meta title="Amazona - Blog" />
      <BreadCrumb title="Blog" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card py-3">
                <h3 className="filter-title">News Feed</h3>

                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Laptop</li>
                    <li>Mobile</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-4">
                  <BlogCard
                    imgUrl="images/blog-1.jpg"
                    date="3 March 2023"
                    title="Amazona helps employees learn and earn"
                    desc="We committed to spending $1.2 billion by 2025 to provide prepaid education and free technical skills training"
                  />
                </div>

                <div className="col-6 mb-4">
                  <BlogCard
                    imgUrl="images/blog-2.jpg"
                    date="25 January 2023"
                    title="Amazona pays college tuition for employees"
                    desc="We committed to spending $1.2 billion by 2025 to provide prepaid education and free technical skills training"
                  />
                </div>

                <div className="col-6 mb-4">
                  <BlogCard
                    imgUrl="images/blog-4.jpg"
                    date="2 January 2023"
                    title="3 new features to try out on your Kindle Scribe"
                    desc="Here are a few new features that will bring your Kindle Scribe experience to the next level. New brush types."
                  />
                </div>

                <div className="col-6 mb-4">
                  <BlogCard
                    imgUrl="images/blog-3.jpg"
                    date="15 January 2023"
                    title="One Medical joins Amazona to make it easier"
                    desc="Together, Amazona and One Medical will help more people get better care, when and how they need it"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
