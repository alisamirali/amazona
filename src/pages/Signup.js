import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Meta title="Amazona - Signup" />
      <BreadCrumb title="signup" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="auth-title text-center mb-4">Signup</h3>
              <form className="auth-from d-flex flex-column gap-15">
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-15">
                  <button type="submit" className="button border-0">
                    Signup
                  </button>
                  <Link to="/login" className="border-0 signup-btn">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
