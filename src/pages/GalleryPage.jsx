import Header from "../template/Header";
import Footer from "../template/Footer";
import Gallery from "../components/gallery/Gallery";

const GalleryPage = () => {
  return (
    <div>
      <Header />
      <div className="min-vh-100 pt-3 animate__animated animate__fadeInLeft">
        <Gallery />
        <h1 className=" main-section-title text-center">Gallery</h1>
      </div>
      <Footer />
    </div>
  );
};
export default GalleryPage;
