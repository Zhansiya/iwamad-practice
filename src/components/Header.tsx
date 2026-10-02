import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

function Header() {
    const {likes} = useLikes();
    
    return (
        <header>
            <h1>My website</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <p>{likes}</p>
        </header>
    );
}

export default Header;