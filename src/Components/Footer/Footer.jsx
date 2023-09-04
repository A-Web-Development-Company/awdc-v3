import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <h2 className="footer-tag">Connect with us</h2> */}
      <section className="footer-cta">
        <div className="footer-tagline">
          <p className="footer-tag-light">
            Looking to think outside the box and come up with innovative
            solutions?
          </p>
          <p className="footer-tag-dark">Let&apos;s make it happen!</p>
          <PrimaryButton className="footer-cta-button">
            Contact Us
          </PrimaryButton>
          <a className="contact-email" href="mailto:hello@awdc.io">
            hello@awdc.io
          </a>
        </div>
      </section>
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
