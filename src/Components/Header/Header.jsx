import { useState, useEffect, useRef } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import Logo from '../../assets/images/awdc-logo-lower-spaced-no-background.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  const navMenuRef = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleOutsideClick = (e) => {
    if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('click', handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // below might be more efficient with tailwind implementation
  // sets simple media query-like conditional display once
  // instead running func at any/all page adjustment
  // may not be necessary as most page size changes are automatic
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container" ref={navMenuRef}>
          <div className="left">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="awdc-logo" />
              </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
          </div>
          <div className="right">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                  Home
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
      <div
        className={`overlay ${click ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Header;
