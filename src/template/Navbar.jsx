const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            RoberWeb
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  text-center "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                href=""
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </div>
            <div className="navbar-nav">
              <a href="" className="nav-link" aria-current="page" href="#">
                Gallery
              </a>
            </div>
            <div className="navbar-nav">
              <a href="" className="nav-link" aria-current="page" href="#">
                About
              </a>
            </div>
            <div className="navbar-nav">
              <a href="" className="nav-link" aria-current="page" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
