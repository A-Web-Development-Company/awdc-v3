import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "../../assets/images/awdc-logo-lower-spaced-no-background.png";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="awdc-logo" />
      </div>
      <ul>
        <li className="nav-item">Link 1</li>
        <li className="nav-item">Link 2</li>
        <li className="nav-item">Link 3</li>
        <PrimaryButton>Contact</PrimaryButton>
      </ul>
    </nav>
  );
};

export default Header;
