import { useState } from 'react';

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
      </div>
    </div>
  );
};

export default BurgerMenu;