import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Meta title="Amazona - Login" />
      <BreadCrumb title="Login" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="auth-title text-center mb-4">Login</h3>
                <form className="auth-from d-flex flex-column gap-15">
                  <div className="mt-2">
                    <input
                      type="email"
                      placeholder="Email"
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
                  <div>
                    <Link
                      className="text-dark forgot-password"
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button type="submit" className="button border-0">
                      Login
                    </button>
                    <Link to="/signup" className="border-0 signup-btn">
                      Signup
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
