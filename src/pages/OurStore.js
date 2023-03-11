import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import StoreProductCard from "../components/StoreProductCard";

function OurStore() {
  // const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Amazona - Our Store" />
      <BreadCrumb title={`store`.charAt(0).toUpperCase() + `store`.slice(1)} />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* Filter Section */}
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>

                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input mb-0"
                      id="watch"
                    />
                    <label className="form-check-label mb-0" htmlFor="watch">
                      Watch
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input mb-0"
                      id="tv"
                    />
                    <label className="form-check-label mb-0" htmlFor="tv">
                      Tv
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input mb-0"
                      id="mobile"
                    />
                    <label className="form-check-label mb-0" htmlFor="mobile">
                      Mobile
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input mb-0"
                      id="camera"
                    />
                    <label className="form-check-label mb-0" htmlFor="camera">
                      Camera
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input mb-0"
                      id="laptop"
                    />
                    <label className="form-check-label mb-0" htmlFor="laptop">
                      Laptop
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="filter-subtitle">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input mb-0"
                        id="in-stock"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="in-stock"
                      >
                        In Stock (1)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input mb-0"
                        id="out-stock"
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="out-stock"
                      >
                        Out Of Stock
                      </label>
                    </div>
                  </div>

                  <h5 className="filter-subtitle">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="from"
                      />
                      <label htmlFor="floatingInput1">from</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput2"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput2">to</label>
                    </div>
                  </div>

                  <h5 className="filter-subtitle">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li style={{ backgroundColor: "#DF2E38" }}></li>
                      <li style={{ backgroundColor: "#DF7857" }}></li>
                      <li style={{ backgroundColor: "#539165" }}></li>
                      <li style={{ backgroundColor: "#804674" }}></li>
                      <li style={{ backgroundColor: "#E7B10A" }}></li>
                      <li style={{ backgroundColor: "#3E54AC" }}></li>
                      <li style={{ backgroundColor: "#7A3E65" }}></li>
                      <li style={{ backgroundColor: "#865DFF" }}></li>
                      <li style={{ backgroundColor: "#FF0303" }}></li>
                    </ul>
                  </div>

                  <h5 className="filter-subtitle">Sizes</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input mb-0"
                        id="size1"
                      />
                      <label className="form-check-label mb-0" htmlFor="size1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input mb-0"
                        id="size2"
                      />
                      <label className="form-check-label mb-0" htmlFor="size2">
                        M (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input mb-0"
                        id="size3"
                      />
                      <label className="form-check-label mb-0" htmlFor="size3">
                        L (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input mb-0"
                        id="size4"
                      />
                      <label className="form-check-label mb-0" htmlFor="size4">
                        XL (3)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 p-2">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">
                      Tv
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">
                      Watch
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">
                      Camera
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">
                      Smart
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">
                      Device
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/speaker.jpg"
                        className="img-fluid"
                        alt="Random Product"
                      />
                    </div>

                    <div className="w-50">
                      <h5>Round Face 20233</h5>

                      <ReactStars
                        className="mb-5"
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffc462"
                      />
                      <b className="mb-0">$22</b>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/headphone.jpg"
                        className="img-fluid"
                        alt="Random Product"
                      />
                    </div>

                    <div className="w-50">
                      <h5>Round Face 20233</h5>

                      <ReactStars
                        className="mb-5"
                        count={5}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor="#ffc462"
                      />
                      <b className="mb-0">$35</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Gallery Section */}
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 w-50">Sort By:</p>
                    <select
                      name="sorting"
                      className="form-control form-select"
                      id="sort"
                    >
                      <option value="best-selling">Best Selling</option>
                      <option value="featured">Featured</option>
                      <option value="az">A-Z</option>
                      <option value="za">Z-A</option>
                      <option value="price-up">Price - Low To Hight</option>
                      <option value="price-down">Price - High To Low</option>
                      <option value="date-latest">
                        Date - Latest To Oldest
                      </option>
                      <option value="date-oldest">
                        Date - Oldest To Latest
                      </option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 total-products">
                      Total Products:{" "}
                      <b
                        className="badge p-2 text-white"
                        style={{
                          borderRadius: "50%",
                          fontSize: "14px",
                          backgroundColor: "#ffc462",
                        }}
                      >
                        35
                      </b>
                    </p>
                    {/* <div className="d-flex gap-10 align-items-center grid">
                      <img
                        src="images/gr4.svg"
                        className="img-fluid d-block"
                        alt="icon"
                       
                      />
                      <img
                        src="images/gr3.svg"
                        className="img-fluid d-block"
                        alt="icon"
                      
                      />
                      <img
                        src="images/gr2.svg"
                        className="img-fluid d-block"
                        alt="icon"
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                      <img
                        src="images/gr.svg"
                        className="img-fluid d-block"
                        alt="icon"
                        onClick={() => {
                          setGrid(12);
                        }}
                      />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="products-list pb-5 d-flex justify-content-start flex-wrap">
                <StoreProductCard
                  imgUrl="images/watch.jpg"
                  category="Smart Watches"
                  title="Round Face 2023"
                  price="$39"
                  rate={3}
                />
                <StoreProductCard
                  imgUrl="images/headphone.jpg"
                  category="Headphones"
                  title="Beats Solo3"
                  price="$119"
                  rate={4}
                />
                <StoreProductCard
                  imgUrl="images/homeapp.jpg"
                  category="Kitchen Tools"
                  title="BUYDEEM Toaster"
                  price="$72"
                  rate={5}
                />
                <StoreProductCard
                  imgUrl="images/speaker.jpg"
                  category="Speakers"
                  title="Portable Speaker"
                  price="$25"
                  rate={4}
                />
                <StoreProductCard
                  imgUrl="images/acc.jpg"
                  category="Buds"
                  title="Studio Buds"
                  price="$55"
                  rate={3}
                />
                <StoreProductCard
                  imgUrl="images/laptop.jpg"
                  category="Laptops"
                  title="MacBook Pro"
                  price="$2000"
                  rate={5}
                />
                <StoreProductCard
                  imgUrl="images/speaker.jpg"
                  category="Speakers"
                  title="Portable Speaker"
                  price="$25"
                  rate={4}
                />
                <StoreProductCard
                  imgUrl="images/watch.jpg"
                  category="Smart Watches"
                  title="Round Face 2023"
                  price="$39"
                  rate={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
