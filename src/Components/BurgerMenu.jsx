import { useState } from 'react';
import linkedinLogo from "../media/linkedIn.svg";
import githublogo from "../media/github.svg";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  }

  const {t} = useTranslation();
  const { menu, home, projects, about, close } = t("burgerMenu");

  return (
    <div className="burger-menu-container hide-desktop">
      <li className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        {menu}
      </li>
      <div className={`overlay ${isMenuOpen ? 'show' : 'hide'}`}></div>
      <div className={`menu-content ${isMenuOpen ? 'show' : 'hide'}`}>
                <div className="close-btn-container">
                    <button className='menu-btn' onClick={handleMenuToggle}>{close}</button>
                </div>
            <div className="burger-links">
                <ul>
                  <li>
                    <Link to="/" className='burger-link' onClick={handleMenuToggle}>{home}</Link>
                  </li>
                  <li>
                    <Link to="about" className='burger-link' onClick={handleMenuToggle}>{about}</Link>
                  </li>
                  <li>
                    <Link to="projects" className='burger-link' onClick={handleMenuToggle}>{projects}</Link>
                  </li>
                </ul>
            </div>
            <div className="menu-bottom">
                <div className="menu-bottom-icons">
                    <ul>
                    <li className="linkedin-btn">
                        <a target='_blank'
            rel='noopener noreferrer' href="https://www.linkedin.com/in/rei-sikk-a642b9218/">
                <img src={linkedinLogo} alt="LinkedIn logo" />
            </a>
                    </li>
                    <li className="linkedin-btn">
                        <a target='_blank'
            rel='noopener noreferrer' href="https://github.com/ReiSikk">
                <img src={githublogo} alt="Github logo" />
            </a>
                    </li>
                    </ul>
                </div>
                <a  className="email-link" href="mailto:sikkrei@gmail.com">sikkrei@gmail.com</a>

            </div>
      </div>
    </div>
  );
};

export default BurgerMenu;