import "./template.css";

const Footer = () => {
  let presentDate = new Date();
  let presentYear = presentDate.getFullYear();
  return (
    <footer id="footer" className="container-fluid p-3">
      <div className="row justify-content-center align-items-center">
        Roberto Medeiros &copy; {presentYear} All Rights Reserved
      </div>
    </footer>
  );
};
export default Footer;
