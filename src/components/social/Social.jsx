import React from "react";
import { Link } from "react-router-dom";
import "./social.css";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faAt,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

const Social = () => {
  return (
    <div id="social" className="container-fluid social-container ">
      <div className="row">
        <div className="col ">
          <ul className="d-flex gap-3 justify-content-center social-width">
            <li>
              <Link
                to="https://github.com/rober-web"
                target="_blank"
                title="Github"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="fs-3 social-icon"
                />
              </Link>
            </li>
            <li>
              <Link
                to="https://linkedin.com/in/roberto-medeiros"
                target="_blank"
                title="Linkedin"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="fs-3 social-icon"
                />
              </Link>
            </li>
            <Link
              to="javascript:void(0)"
              onClick={() => (window.location = "mailto:hello@roberweb.com")}
              target="_blank"
              title="Email"
            >
              <FontAwesomeIcon icon={faAt} className="fs-3 social-icon" />
            </Link>
            <li>
              <Link to="/resume" title="CV">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="fs-3 social-icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Social;
