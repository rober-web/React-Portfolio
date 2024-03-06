import React from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink
                className="nav-link"
                to="/home"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "black",
                })}
                aria-current="page"
              >
                Home
              </NavLink>
            </div>

            <div className="navbar-nav">
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "black",
                })}
                className="nav-link"
                aria-current="page"
              >
                About
              </NavLink>
            </div>

            <div className="navbar-nav">
              <NavLink
                to="/gallery"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "black",
                })}
                className="nav-link"
                aria-current="page"
              >
                Gallery
              </NavLink>
            </div>

            <div className="navbar-nav">
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "black",
                })}
                className="nav-link"
                aria-current="page"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
