//This page is rendered once the pdf icon is clicked on Social component
//It shall not appear in the NavBar component
import React from "react";
import "../assets/css/style.css";
import Header from "../template/Header";
import Footer from "../template/Footer";
import CVComponent from "../components/cv/CVComponent";

const AboutPage = () => {
  return (
    <>
      <Header />
      <section
        id="gallery"
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center p-3  pb-5 ptop main-section-bg animate__animated animate__fadeIn"
      >
        <h1 className="main-section-title text-center mb-4">Resume</h1>
        <CVComponent />
      </section>
      <Footer />
    </>
  );
};
export default AboutPage;
