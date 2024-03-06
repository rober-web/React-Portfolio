import React, { useState, useEffect } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import Gallery from "../components/gallery/Gallery";
//import Project from "../assets/utils/galleryCards.json";

const GalleryPage = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data (replace 'your-json-file.json' with the actual path)
    fetch("src/assets/utils/galleryCards.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header />
      <section
        id="gallery"
        className="min-vh-100  p-3 pt-5 main-section-bg animate__animated animate__fadeIn"
      >
        <div className="container">
          <div className="row mt-5">
            <div className="col d-flex flex-column justify-content-center align-items-center pb-5">
              <h1 className="main-section-title text-center">Gallery</h1>
              <p className="text-center main-section-text">
                Explore my portfolio, showcasing some web development projects
                reflecting my passion for creating engaging and functional
                websites with front-end and back-end expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="row gap-4 justify-content-center">
          {projectsData.map((project, index) => (
            <Gallery
              key={index}
              title={project.title}
              deployedVersionLink={project.deployedVersion}
              githubRepositoryLink={project.githubRepository}
              screenshotSrc={project.deployedScreenshot}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default GalleryPage;
