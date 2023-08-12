import { useState } from 'react';
import linkedinLogo from "../media/linkedIn.svg";
import githublogo from "../media/github.svg";

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="burger-menu-container">
      <li className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        Menu
      </li>
      {isMenuOpen && <div className="overlay" onClick={handleMenuToggle}></div>}
      <div className={`menu-content ${isMenuOpen ? 'show' : ''}`}>
        {/* Place your menu items or links here */}
                <div className="close-btn-container">
                    <li className='menu-btn' onClick={handleMenuToggle}>Close</li>
                </div>
            <div className="burger-links">
                <ul>
                    <li className='burger-link'>Home</li>
                    <li className='burger-link'>About</li>
                    <li className='burger-link'>Projects</li>
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