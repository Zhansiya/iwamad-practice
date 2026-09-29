import { NavLink } from 'react-router';

function Header() {
    return (
        <header>
            <h1>My website</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
        </header>
    );
}

export default Header;