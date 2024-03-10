import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "./about.css";

const About = () => {
  return (
    <section
      id="about"
      className="min-vh-100 p-3 d-flex  align-items-center justify-content-center animate__animated animate__fadeIn"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-center gap-20">
              <h1 className="main-section-title-about">About Me</h1>
            </div>
          </div>
          <div className="col-md-6 py-3 text-center about-info ">
            <p className="main-section-text text-center">
              I am a passionate web developer dedicated to creating visually
              stunning and seamlessly functional websites. With a keen eye for
              design and a love for coding, I strive to bring your digital
              vision to life. Let's collaborate to build a compelling online
              presence that leaves a lasting impression.
            </p>
            <Link className="btn btn-warning" to="/gallery">
              Check my Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
