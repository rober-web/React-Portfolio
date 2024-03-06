import "./contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-vh-100 p-3 pt-5  animate__animated animate__fadeIn"
    >
      <div className="row pt-5">
        <div className="col-md-6 flex-column d-flex justify-content-center align-items-center">
          <h1 className="main-section-title text-center">Contact</h1>
          <p className="main-section-text text-center">
            Let's bring your ideas to life – contact me, and together, we'll
            create a digital masterpiece tailored to your vision.
          </p>
        </div>

        <div className="col-md-6 flex-column d-flex justify-content-center align-items-center p-3 the-form">
          {/* Contact Form */}

          <form action="/submit-form" method="post" className="w-75 mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-control"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
