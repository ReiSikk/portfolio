
import linkedinLogo from "../media/linkedIn.svg";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import logo from "../media/logo.svg"

function NavBar() {
   /*  const handleLinkedIn = () => {
        window.location.replace('https://linkedin.com');
      }; */
  return (
    <div className="nav">
        <nav className="nav-wrapper">
            <Link to="/" className="logo"><img src={logo} alt="link to homepage" title="Home"/></Link>
            <ul className="nav-buttons-wrap">
                <BurgerMenu />
                    <li className="social-btn hide-mobile">
                        <a target='_blank'
            rel='noopener noreferrer' href="https://www.linkedin.com/in/rei-sikk-a642b9218/">
                <img src={linkedinLogo} alt="LinkedIn" />
            </a>
                    </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar