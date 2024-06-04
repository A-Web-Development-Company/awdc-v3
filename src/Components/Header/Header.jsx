import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "../../assets/images/awdc-logo-lower-spaced-no-background.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  // below might be more efficient with tailwind implementation
  // sets simple media query-like conditional display once 
  // instead running func at any/all page adjustment
  // may not be necessary as most page size changes are automatic
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="left">
          <div className="logo">
            <Link to='/'><img src={Logo} alt="awdc-logo" /></Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
        <div className="right">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                Work
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                Services
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <PrimaryButton
                to="/"
                className="mobile-contact-button"
                onClick={closeMobileMenu}
              >
                Contact
              </PrimaryButton>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-nav-button">
        <PrimaryButton className="contact-cta-button">Contact</PrimaryButton>
      </div>
    </nav>
  );
};

export default Header;
