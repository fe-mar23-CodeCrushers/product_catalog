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
                src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/cross.png"
                alt="Open navigation menu"
              />
            ) : (
              <img 
                src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/burger.png"
                alt="Close navigation menu"
              />
            )}
        </button>
      </div>

      <Navbar isOpen={isOpen} />
    </nav>
  )
}