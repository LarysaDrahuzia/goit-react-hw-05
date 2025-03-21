import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={getLinkStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={getLinkStyles}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
