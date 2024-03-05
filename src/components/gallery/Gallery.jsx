import "./gallery.css";

const Gallery = ({
  title,
  deployedVersionLink,
  githubRepositoryLink,
  screenshotSrc,
}) => {
  return (
    <div className="card col-sm-12 col-md-3 card-size p-3">
      <img
        src={screenshotSrc}
        className="card-img-top shadow border border-dark mb-3"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        {/* You can add additional details or customize the layout here */}
        {/* Example: */}
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <a
            href={deployedVersionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-full-width"
          >
            Check Deployed Version
          </a>

          <a
            href={githubRepositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-full-width "
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
