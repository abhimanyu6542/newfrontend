import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-success bg-opacity-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="fs-1 text-white">About Us</h1> <br />
              <p className="text-start">
                We help clients achieve their business goals with our services
                that drive revenue growth. From strategy to execution and
                execution to optimization, our team strives to give maximum ROI
                to our clients. We offer various services such as software
                development, digital marketing, email marketing, UI/UX
                designing, etc.
              </p>
            </div>
            <div className="col-lg-3">
              <h1 className="fs-1 text-start text-white">Services</h1>
              <p className="text-start text-white">Web Application</p>
              <p className="text-start text-white">Product Management</p>
              <p className="text-start text-white">User Interaction Design</p>
              <p className="text-start text-white">UX Consultant</p>
              <p className="text-start text-white">UX/UI Design</p>
              <p className="text-start text-white">Backend Development</p>
            </div>
            <div className="col-lg-3">
              <h1 className="fs-1 text-start text-white">Support</h1>
              <p className="text-start text-white">Frequently Asked</p>
              <p className="text-start text-white">Terms & Conditions</p>
              <p className="text-start text-white">Privacy Policy</p>
              <p className="text-start text-white">Contact Us</p>
            </div>
            <div className="col-lg-3">
              <h1 className="fs-1 text-start text-white">Follow Us</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
