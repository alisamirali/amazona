import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <>
      <Meta title="Amazona - Reset Password" />
      <BreadCrumb title="Reset Password" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="container-xxl">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="auth-title text-center mb-2">Reset Password</h3>
                <p className="text-center mb-4 auth-desc">
                  Please select a strong password.
                </p>
                <form className="auth-from d-flex flex-column gap-15">
                  <div className="mt-2">
                    <input
                      type="password"
                      placeholder="New Password"
                      className="form-control"
                    />
                  </div>

                  <div className="mt-2">
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="form-control"
                    />
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center gap-15">
                    <button type="submit" className="button border-0">
                      Reset Password
                    </button>
                    <Link to="/login" className="cancel-btn">
                      Cancel
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

export default ResetPassword;
