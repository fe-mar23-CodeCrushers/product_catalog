import './NavButtons.scss';
import { PageLink } from '../PageLink/PageLink';
import { cartContext } from '../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

export const NavButtons = () => {
  const { cart } = useContext(cartContext)
  const location = useLocation();
  const sumOfItems = cart.reduce((sum, n) => sum + n.quantity, 0)

  return (
    <div className="nav-buttons">
      <PageLink
        to="favorites"
        classNames={`nav-buttons__element ${location.pathname === '/favorites' ? 'nav-buttons__element--active' : ''}`}
        innerValue={
          <img
            src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Favourites%20(Heart%20Like).png"
            alt="favorites icon"
            className="nav-buttons__icon"
          />
        }
      />
      <PageLink
        to="cart"
        classNames={`nav-buttons__element ${location.pathname === '/cart' ? 'nav-buttons__element--active' : ''}`}
        innerValue={
          <div className="nav-buttons__cart">
            <img
              src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Shopping%20bag%20(Cart).png"
              alt="cart icon"
              className="nav-buttons__icon"
            />
            {cart.length > 0 && <span className="nav-buttons__value">{sumOfItems}</span>}
          </div>
        }
      />
    </div>
  );
};
