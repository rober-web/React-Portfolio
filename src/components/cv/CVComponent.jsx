import PDF from "../../assets/utils/MyCV.pdf";

const CVComponent = () => (
  <iframe className="the-pdf"
    src={PDF + "#toolbar=0"}
    type="application/pdf"
  />
);

export default CVComponent;
