import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>Connect with us</h2>
      <div className="social">
        <a
          href="https://www.instagram.com/awdc.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://twitter.com/awdc_io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="copyright">
        <p>
          &copy; Copyright {new Date().getFullYear()}{" "}
          <Link to="/">A Web Development Company</Link> All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
