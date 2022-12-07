import { Link } from 'react-router-dom'
import './Header.css';
import * as userService from '../../utilities/users-service'
import {ReactComponent as GithubIcon} from '../images/logo-github.svg';
import {ReactComponent as LinkedinIcon} from '../images/logo-linkedin.svg';
import {ReactComponent as EmailIcon} from '../images/mail-outline.svg';

export default function Header({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <div class="socials">
                <a href="https://github.com/schen044" target="_blank"><GithubIcon class="github-icon" /></a>
                <a href="https://www.linkedin.com/in/serra-chen/" target="_blank"><LinkedinIcon class="linkedin-icon" /></a>
                <a href="mailto:serra.chen20@gmail.com" target="_blank"><EmailIcon class="email-icon" /></a>
            </div>
            <div>
                <Link to="/orders">Order History</Link>
                &nbsp; | &nbsp;
                <Link to="/hcgim-tracker">HCGIM Tracker</Link>
                &nbsp; | &nbsp;
                Welcome, {user.name}
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
        </nav>
    )
}