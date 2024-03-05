import Header from "../template/Header";
import Footer from "../template/Footer";
import Gallery from "../components/gallery/Gallery";

const GalleryPage = () => {
  return (
    <div>
      <Header />
      <section
        id="gallery"
        className="min-vh-100 p-3 pt-5 main-section-bg animate__animated animate__fadeInLeft"
      >
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center pb-5">
            <h1 className="main-section-title text-center">Gallery</h1>
            <p className="text-center main-section-text">
              Explore my portfolio, showcasing some web development projects
              reflecting my passion for creating engaging and functional
              websites with front-end and back-end expertise.
            </p>
          </div>
        </div>
        <div className="row">
          <Gallery />
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default GalleryPage;
