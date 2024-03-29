import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import mainImage from "../../assets/img/main-image.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center min-vh-100 animate__animated animate__fadeIn p-5"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 the-border d-flex justify-content-center px-5 pb-5 mt-md-5">
            <img
              id="hero-img"
              src={mainImage}
              className="img-fluid main-image animate__animated animate__fadeInLeft"
              alt="Main"
            />
          </div>
          <div className="col-md-6 the-border text-center d-flex flex-column align-items-center justify-content-center ">
            <h1 className="animate__animated animate__fadeInRight">
              Hello, this is Roberto
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Welcome to my Porfolio! - Crafting Astonishing Websites to Knock
              Out Your Digital Goals.
            </p>
            <Link className="btn btn-warning" to="/gallery">
              Let's do That!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
