import React from "react";
import "./gallery.css";

const Gallery = ({
  title,
  deployedVersionLink,
  githubRepositoryLink,
  screenshotSrc,
}) => {
  return (
    <div className="card col-sm-6 col-md-4 col-lg-3 card-size p-3">
      <img
        src={screenshotSrc}
        className="card-img-top shadow border border-dark mb-3"
        alt="..."
      />
      <div className="card-body">
        <h5 className="main-section-title text-center">{title}</h5>

        {/* I yet have to decide wether adding a description or not in this section */}

        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <a
            href={deployedVersionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-full-width"
          >
            See Project
          </a>

          <a
            href={githubRepositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-full-width "
          >
            See GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
