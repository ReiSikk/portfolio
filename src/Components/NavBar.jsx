
import linkedinLogo from "../media/linkedIn.svg";
import logo from "../media/logo.svg"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { motion } from "framer-motion";

function NavBar() {
const [activePage, setActivePage] = useState("Home");
//nav bar hide on scroll
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledToTop = scrollY === 0;

      if (window.innerWidth > 768) {
        if (prevScrollPos > currentScrollPos || isScrolledToTop) {
          setIsVisible(true); // User is scrolling up, show the navbar
        } else {
          setIsVisible(false); // User is scrolling down, hide the navbar
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


function handleClick(e) {
    setActivePage(e.target.innerText);
}




  return (
    <motion.div 
    className={`nav ${isVisible ? 'show' : ''}`}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
    >
        <nav className="nav-wrapper">
            <NavLink to="/" className="logo"><img src={logo} alt="link to homepage" title="Home" width={48} height={48}/></NavLink>
            <div className="nav-right">
            <ul className="nav-buttons-wrap hide-links">
                <li className={activePage === 'Home' ? 'active-link' : 'nav-link'}>
                <NavLink to="/" className="nav-link" onClick={handleClick}>
                    Home
                </NavLink>
                </li>
                <li className={activePage === 'Projects' ? 'active-link' : 'nav-link'}>
                <NavLink to="projects" className="nav-link" onClick={handleClick}>
                    Projects
                </NavLink>
                </li>
                <li className={activePage === 'About' ? 'active-link' : 'nav-link'}>
                <NavLink to="about" className="nav-link" onClick={handleClick}>
                    About
                </NavLink>
                </li>
                    <li className="social-btn hide-mobile">
                        <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/rei-sikk-a642b9218/">
                          <img src={linkedinLogo} alt="LinkedIn" />
                       </a>
                   </li>
            </ul>
              
                <BurgerMenu />
                </div>
        </nav>
    </motion.div>
  )
}

export default NavBar