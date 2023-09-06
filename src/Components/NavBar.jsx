
import linkedinLogo from "../media/linkedIn.svg";
import logo from "../media/logo.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

function NavBar() {
const [activePage, setActivePage] = useState("Home");

function handleClick(e) {
    setActivePage(e.target.innerText);
}


  return (
    <div className="nav">
        <nav className="nav-wrapper">
            <NavLink to="/" className="logo"><img src={logo} alt="link to homepage" title="Home"/></NavLink>
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
    </div>
  )
}

export default NavBar