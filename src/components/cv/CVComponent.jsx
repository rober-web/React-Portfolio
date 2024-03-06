import React from "react";
import PDF from "../../assets/utils/MyCV.pdf";

const CVComponent = () => (
  <embed
    src={PDF + "#toolbar=0"}
    type="application/pdf"
    height={800}
    width={500}
  />
);

export default CVComponent;
