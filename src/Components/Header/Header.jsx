import PrimaryButton from "../Buttons/PrimaryButton";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <h1 className="Logo">AWDC</h1>
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
