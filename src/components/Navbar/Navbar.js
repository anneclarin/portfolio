import './Navbar.scss'

import { HashLink as Link } from 'react-router-hash-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className='Navbar'>
        <Link className='logo' to='#/'>
          {/* <img src={LogoS} alt='logo' />
          <img className='sub-logo' src={LogoSubtitle} alt='slobodan' /> */}
        </Link>
        <nav>
          <Link exact='true' activeclassname='active' className='link' to='#/' smooth>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </Link>
          <Link exact='true' activeclassname='active' className='link' to='#about' smooth>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </Link>
          <Link exact='true' activeclassname='active' className='link' to='#portfolio' smooth>
            <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
          </Link>
          <Link exact='true' activeclassname='active' className='link' to='#contact' smooth>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </Link>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/anne-mikaela-clarin-99509b1b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AnneClarin"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        </ul>
    </div>
  )
}
