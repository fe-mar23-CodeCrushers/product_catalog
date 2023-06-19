import { PageLink } from '../PageLink/PageLink';
import './Navbar.scss';

import { NavButtons } from '../NavButtons/NavButtons';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isOpen, closeMenu }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <ul className="navbar__list">
        <li
          className={`navbar__element ${
            location.pathname === '/home' || location.pathname === '/'
              ? 'navbar__element--active'
              : ''
          }`}
          onClick={(handleLinkClick)}
        >
          <PageLink
            to="/home"
            classNames="navbar__link"
            innerValue="Home"
          />
        </li>

        <li
          className={`navbar__element ${
            location.pathname === '/phones' ? 'navbar__element--active' : ''
          }`}
          onClick={handleLinkClick}
        >
          <PageLink
            to="/phones"
            classNames="navbar__link"
            innerValue="Phones"
          />
        </li>

        {/* <li className={`navbar__element ${location.pathname === '/tablets' ? 'navbar__element--active' : ''}`}>
          <PageLink to="/tablets" classNames="navbar__link" innerValue="Tablets" onClick={handleLinkClick} />
        </li>

        <li className={`navbar__element ${location.pathname === '/accessories' ? 'navbar__element--active' : ''}`}>
          <PageLink to="/accessories" classNames="navbar__link" innerValue="Accessories" onClick={handleLinkClick} />
        </li> */}
      </ul>

      <NavButtons />
    </div>
  );
};