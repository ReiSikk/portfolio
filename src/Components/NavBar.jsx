
import linkedinLogo from "../media/linkedIn.svg";
import BurgerMenu from "./BurgerMenu";
function NavBar() {
   /*  const handleLinkedIn = () => {
        window.location.replace('https://linkedin.com');
      }; */
  return (
    <div className="nav-wrapper">
        <nav>
            <ul className="nav-buttons-wrap">
                <BurgerMenu />
                    <li className="linkedin-btn hide-mobile">
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