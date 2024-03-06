import React from "react";
import PDF from "../../assets/utils/MyCV.pdf";

const CVComponent = () => (
  <iframe className="the-pdf"
    src={PDF + "#toolbar=0"}
    type="application/pdf"
    /*     height={800}
    width={800} */
  />
);

export default CVComponent;
