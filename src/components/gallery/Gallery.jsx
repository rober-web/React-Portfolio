import "./gallery.css";

const Gallery = () => {
  return (
   
      <div className="card col-sm-12 card-size">
        <img src="./images/kodenart-img.PNG" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kodenart</h5>
            <p className="card-text">HTML | CSS | JavaScript | PHP | Wordpress | Oxygen Page Builder </p>
            <a href="https://kodenart.com/" target="_blank" className="btn btn-hero">Check Project</a>
          </div>
      </div>
  
  );
};
export default Gallery;
