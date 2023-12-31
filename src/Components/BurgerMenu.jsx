import { useState } from 'react';
import linkedinLogo from "../media/linkedIn.svg";
import githublogo from "../media/github.svg";
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);

  }

  return (
    <div className="burger-menu-container hide-desktop">
      <li className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        Menu
      </li>
      <div className={`overlay ${isMenuOpen ? 'show' : 'hide'}`}></div>
      <div className={`menu-content ${isMenuOpen ? 'show' : 'hide'}`}>
        {/* Place your menu items or links here */}
                <div className="close-btn-container">
                    <button className='menu-btn' onClick={handleMenuToggle}>Close</button>
                </div>
            <div className="burger-links">
                <ul>
                  <li>
                    <Link to="/" className='burger-link' onClick={handleMenuToggle}>Home</Link>
                  </li>
                  <li>
                    <Link to="about" className='burger-link' onClick={handleMenuToggle}>About</Link>
                  </li>
                  <li>
                    <Link to="projects" className='burger-link' onClick={handleMenuToggle}>Projects</Link>
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