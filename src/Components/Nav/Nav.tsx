import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Nav.scss';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__btns">
        <button
          className={`nav__burger ${isOpen ? 'nav__burger--open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <img
              src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/cross.png"
              alt="Close navigation menu"
            />
          ) : (
            <img
              src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/burger.png"
              alt="Open navigation menu"
            />
          )}
        </button>
      </div>

      <Navbar isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};
