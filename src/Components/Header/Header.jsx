import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "../../assets/images/awdc-logo-lower-spaced-no-background.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="awdc-logo" />
          </div>
        </div>
        <div className="right">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Work
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <PrimaryButton className="contact-cta-button">Contact</PrimaryButton>
    </nav>
  );
};

export default Header;
