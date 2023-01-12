import React from "react";
// import Login from './Login'
import Navmenubar from "./Navmenubar";
import welcomeimg from "../image/welcome_thumb_1.png";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <div>
        <Navmenubar />
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="fs-1 fw-bolder text-success p-5 m-3">
                  Looking for the best software development agency?
                </h1>
                <p className="fs-5">
                  We help companies to focus on core business by taking over
                  complete responsibility. Get ready to unleash your business
                  opportunities with the top industry professionals.
                </p>
              </div>
              <div className="col-lg-6">
                <img src={welcomeimg} alt="welcome" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="heading">
              <h1 className="mt-3 p-3 text-center">
                The one-stop solution for all your needs
              </h1>
              <p className="fs-5 text-break word-wrap">
                We provide a wide range of services starting from software
                developement, UI/UX to cloud <br /> migration a very affordable
                price.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="fs-5 fw-bolder text-dark p-5 m-3">
                  App Development
                </h1>
                <p className="fs-5 text-start">
                  We develop the best in class mobile app for both android and
                  IOS that stands out from the rest.We have expertise in
                  choosing what the best solution is for your mobile app
                  development strategy.
                </p>
              </div>
              <div className="col-lg-6">
                <h1 className="fs-5 fw-bolder text-dark p-5 m-3">
                  Cloud Migration
                </h1>
                <p className="fs-5 text-start">
                  Our Cloud Migration Services focus on providing comprehensive
                  offerings to help you to define and execute your cloud
                  strategy with a structure based approach for a full-stack
                  migration that includes applications, infrastructure, and
                  DevOps Automation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="fs-5 fw-bolder text-dark p-5 m-3">
                  Web Development
                </h1>
                <p className="fs-5 text-start">
                  Whether you are looking to develop a small or a large web
                  application, we have got you covered with our web development
                  team that creates secure and scalable web solutions tailored
                  exclusively for your business goals.
                </p>
              </div>
              <div className="col-lg-6">
                <h1 className="fs-5 fw-bolder text-dark p-5 m-3">
                  UI/UX Designing
                </h1>
                <p className="fs-5 text-start">
                  We provide you with world class UI/UX designs, which
                  fascinates the eyes of your audience and can effortlessly
                  transfigure them into your customers. With our creative and
                  exhilarative designs, for your website and app, you can
                  straight - forwardly stand out from the crowd.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
