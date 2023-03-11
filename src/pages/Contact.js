import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Meta title="Amazona - Contact" />
      <BreadCrumb
        title={`contact`.charAt(0).toUpperCase() + `contact`.slice(1)}
      />

      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="Contact Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76973609345!2d31.188423973619585!3d30.05946989057994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1678566332672!5m2!1sen!2seg"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-100"
              ></iframe>
            </div>

            <div className="col-12 mt-4">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control"
                        placeholder="Your Message"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Send Message</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="d-flex align-items-center gap-10">
                        <AiOutlineHome className="fs-4 icon" />
                        <address className="mb-0">Cairo, Egypt</address>
                      </li>
                      <li className="d-flex align-items-center gap-10">
                        <IoCallOutline className="fs-4 icon" />
                        <a href="tel:+201114181442" className="text-dark">
                          (+20) 1114181442
                        </a>
                      </li>
                      <li className="d-flex align-items-center gap-10">
                        <FiMail className="fs-4 icon" />
                        <a
                          href="mailto:alisamir.dev@gmail.com"
                          className="text-dark"
                        >
                          alisamir.dev@gmail.com
                        </a>
                      </li>
                      <li className="d-flex align-items-center gap-10">
                        <AiOutlineCalendar className="fs-4 icon" />
                        <p className="mb-0">Sunday - Thursday 10AM - 5PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
