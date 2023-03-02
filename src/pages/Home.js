import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/main-banner.jpg"
                  alt="Main Banner Content"
                />

                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Sony ZX Series Wired</h5>
                  <p>On-Ear Headphones, Black MDR-ZX110</p>
                  <Link className="button" to="">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-align-items-center">
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-01.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple MacBook</h5>
                    <p>Laptop M2 Pro chip</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-03.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple iPad Air</h5>
                    <p>Purple - 5th Generation</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-02.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple iPad Air</h5>
                    <p>Purple - 5th Generation</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-04.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple iPad Air</h5>
                    <p>Purple - 5th Generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="Services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="Services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="Services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="Services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="Services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center gap-15">
                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/camera.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Camera</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/tv-monitor.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Smart Tv</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/headphones.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Headset</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/speaker.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Speaker</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/joystick.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Gaming</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/smartphone.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Phone</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/smart-watch.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Watch</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/laptop.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Laptop</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
