import { Link } from 'react-router-dom'
import './Projects.css';

export default function Projects() {

    return (
        <div>
            <ul>
                <li><Link to="/hcgim-tracker">HCGIM Tracker</Link></li>
                <li><Link to="/out-of-office">Out Of Office</Link></li>
                <li><Link to="/collections-tracker">Collections Tracker</Link></li>
                <li><Link to="/Minesweeper">Minesweeper</Link></li> 
            </ul>
        </div>
    )
}