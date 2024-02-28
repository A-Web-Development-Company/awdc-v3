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
          <a
            className="footer-cta-contact-info"
            href="mailto:hello@awdc.io?subject=Hello AWDC!"
          >
            hello@awdc.io
          </a>
          <a className="footer-cta-contact-info" href="tel:4757770754">
            475.777.0754
          </a>
        </div>
        <div className="footer-links">
          <div className="footer-link-col">
            <ul className="footer-col-items">
              <h3 className="footer-col-heading">Practice</h3>
              <li className="footer-col-item">
                <Link to="/" className="footer-col-link">
                  Work
                </Link>
              </li>
              <li className="p-item">
                <Link to="/" className="footer-col-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-link-col">
            <ul className="footer-col-items">
              <h3 className="footer-col-heading">People</h3>
              <li className="footer-col-item">
                <Link to="/" className="footer-col-link">
                  Who We Are
                </Link>
              </li>
              <li className="p-item">
                <Link to="/" className="footer-col-link">
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-link-col">
            <ul className="footer-col-items">
              <h3 className="footer-col-heading">Extra</h3>
              <li className="footer-col-item">
                <Link to="/" className="footer-col-link">
                  Articles
                </Link>
              </li>
              <li className="p-item">
                <Link to="/" className="footer-col-link">
                  Media
                </Link>
              </li>
            </ul>
          </div>
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
