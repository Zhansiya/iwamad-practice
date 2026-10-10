import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="site-brand">
        <img
          src={logo}
          alt="My Portfolio logo"
          className="site-logo"
        />
        <h1>{title}</h1>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <p className="likes-count">Likes: {likes}</p>
    </header>
  );
}

export default Header;