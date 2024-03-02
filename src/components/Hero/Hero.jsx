import "./hero.css";
import mainImage from "../../assets/img/main-image.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center min-vh-100">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xs-12  col-md-6 the-border d-flex justify-content-center p-3">
              <img src={mainImage} className="img-fluid main-image" />
            </div>
            <div className="col-xs-12 col-md-6 the-border text-center">
              <h1>Hello, this is Roberto</h1>
              <p>
                Crafting Astonishing Websites to Knock Out Your Digital Goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
console.log(mainImage);
