import './Navbar.scss';

import { NavButtons } from '../NavButtons/NavButtons';

interface NavbarProps {
  isOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isOpen }) => {
  return (
    <div className={`navbar ${isOpen ? 'navbar--open' : ''}`}
    >
      <ul className="navbar__list">
        <li className="navbar__element  navbar__element--active">
          <a className="navbar__link navbar__link" href="/home">
            Home
          </a>
        </li>

        <li className="navbar__element">
          <a className="navbar__link" href="/phones">
            Phones
          </a>
        </li>

        <li className="navbar__element">
          <a className="navbar__link" href="/tablets">
            Tablets
          </a>
        </li>

        <li className="navbar__element">
          <a className="navbar__link" href="/accessories">
            Accessories
          </a>
        </li>
      </ul>

      <NavButtons />
    </div>
  );
};