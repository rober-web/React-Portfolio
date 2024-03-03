import "./hero.css";
import mainImage from "../../assets/img/main-image.png";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center min-vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 the-border d-flex justify-content-center px-5 pb-5 mt-md-5">
            <img
              id="hero-img"
              src={mainImage}
              className="img-fluid main-image"
              alt="Main"
            />
          </div>
          <div className="col-md-6 the-border text-center">
            <h1>Hello, this is Roberto</h1>
            <p className="">
              Crafting Astonishing Websites to Knock Out Your Digital Goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
