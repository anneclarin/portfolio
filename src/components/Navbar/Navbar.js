import "./Navbar.scss";

import { HashLink as Link } from "react-router-hash-link";

import logo from "../../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="Logo" />
      <nav>
        <Link activeClass="active" className="link" spy to="#Home" smooth>
          Home
        </Link>
        <Link activeClass="active" className="link" spy to="#About" smooth>
          About
        </Link>
        <Link activeClass="active" className="link" spy to="#Portfolio" smooth>
          Portfolio
        </Link>
        <Link activeClass="active" className="link" spy to="#Contact" smooth>
          Contact
        </Link>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/anneclarin/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AnneClarin"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
