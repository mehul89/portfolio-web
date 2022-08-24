import { Link, NavLink } from 'react-router-dom'
import './index.css'

import Logo from '../../asserts/img/Logo.png'
import LogoSub from '../../asserts/img/LogoSub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSkiing, faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';


const Sidebar = () => (
    <>
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
                <img className="logo-sub" src={LogoSub} alt="logo" />

            </Link>
            <nav >

                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="4d4d4e" />

                </NavLink>

                <NavLink exact="true" activeclassname="active" className="skills-link" to="/Skills">
                    <FontAwesomeIcon icon={faSkiing} color="4d4d4e" />

                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/About">
                    <FontAwesomeIcon icon={faUser} color="4d4d4e" />

                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contect-link" to="/Contact">
                    <FontAwesomeIcon icon={faAddressBook} color="4d4d4e" />
                </NavLink>

            </nav>



            <ul  className='ul'>
                <li className='li' > { /* eslint-disable-next-line */}
                    <a target='_blank' rel="noreferrer" href='https://github.com/mehul89' className='a'>
                        <FaGithub color='#4d4d4e' />

                    </a>
                </li>

                <li className='li'> { /* eslint-disable-next-line */}
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/mehul-chapaneri' className='a'>
                        <FaLinkedin   color='#4d4d4e' />

                    </a>
                </li>

                <li className='li'> { /* eslint-disable-next-line */}
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/mehul_8988/' className='a'>
                        <FaInstagram  color='#4d4d4e' />

                    </a>
                </li>

                <li className='li'> { /* eslint-disable-next-line */}
                    <a target='_blank' rel="noreferrer" href='https://twitter.com/mehul_chapaneri?t=jQS_3HV_WhdO33BtHkBUvg&s=09' className='a'>
                        <FaTwitter  color='#4d4d4e' />

                    </a>
                </li>


            </ul>







        </div>


    </>

)

export default Sidebar