import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/react-portfolio/">
      <img src={LogoS} alt="logo" />
      {/* <img className="sub-logo" src={LogoSubtitle} alt="chandler" /> */}
    </Link>
    <nav>
      {/* Home */}
      <NavLink exact="true" activeclassname="active" to="/react-portfolio/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      {/* About */}
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/react-portfolio/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      {/* Contact */}
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/react-portfolio/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    {/* Social Links */}
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.github.com">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
