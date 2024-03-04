import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            RoberWeb
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  text-center  justify-content-end px-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" to="/home" aria-current="page">
                Home
              </Link>
            </div>

            <div className="navbar-nav">
              <Link to="/about" className="nav-link" aria-current="page">
                About
              </Link>
            </div>

            <div className="navbar-nav">
              <Link to="/gallery" className="nav-link" aria-current="page">
                Gallery
              </Link>
            </div>

            <div className="navbar-nav">
              <Link to="/contact" className="nav-link" aria-current="page">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
