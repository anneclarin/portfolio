import './Navbar.scss'

import { HashLink as Link } from 'react-router-hash-link'

import logo from '../../images/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <div className='Navbar'>
       <img src={logo} alt='Logo' />
        <nav>
          <Link exact='true' activeclassname='active' className='link' to='#home' smooth>
            Home
          </Link>
          <Link exact='true' activeclassname='active' className='link' to='#about' smooth>
            About Me
          </Link>
          <Link exact='true' activeclassname='active' className='link' to='#portfolio' smooth>
            Portfolio
          </Link>
          <Link exact='true' activeclassname='active' className='link' to='#contact' smooth>
            Contact
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
