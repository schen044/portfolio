import { Link } from 'react-router-dom'
import './Header.css';
import {ReactComponent as GithubIcon} from '../images/logo-github.svg';
import {ReactComponent as LinkedinIcon} from '../images/logo-linkedin.svg';
import {ReactComponent as EmailIcon} from '../images/mail-outline.svg';

export default function Header() {

    return (
        <nav className="header">
            <div class="socials">
                <a href="https://github.com/schen044" target="_blank"><GithubIcon class="github-icon" /></a>
                <a href="https://www.linkedin.com/in/serra-chen/" target="_blank"><LinkedinIcon class="linkedin-icon" /></a>
                <a href="mailto:serra.chen20@gmail.com" target="_blank"><EmailIcon class="email-icon" /></a>
            </div>
            <div className="nav-links">
                <Link to="/home"><button className="home-button">⌂ &nbsp; Home</button></Link>
            </div>
        </nav>
    )
}