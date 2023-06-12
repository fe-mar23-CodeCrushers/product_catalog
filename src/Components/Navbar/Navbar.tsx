import { PageLink } from '../PageLink/PageLink';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__element navbar__element--active">
          <PageLink to='home' classNames='navbar__link navbar__link' innerValue='Home'/>
        </li>

        <li className="navbar__element">
          <PageLink to='phones' classNames='navbar__link navbar__link' innerValue='Phones'/>
        </li>

        <li className="navbar__element">
          <PageLink to='tablets' classNames='navbar__link navbar__link' innerValue='Tablets'/>
        </li>

        <li className="navbar__element">
          <PageLink to='accessories' classNames='navbar__link navbar__link' innerValue='Accessories'/>
        </li>
      </ul>
    </nav>
  );
};