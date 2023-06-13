import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Nav.scss';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__btns">
        <button
          className={`nav__burger nav__burger--open `}
          aria-label="Open navigation menu button"
          onClick={() => setIsOpen(!isOpen) }
        >
          {isOpen 
            ? (
              <img
              src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Shopping%20bag%20(Cart).png"
              alt="Open navigation menu"
              />
            ) : (
              <img
                src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Favourites%20(Heart%20Like).png"
                alt="Close navigation menu"
              />
            )}
        </button>
      </div>

      <Navbar isOpen={isOpen} />
    </nav>
  )
}