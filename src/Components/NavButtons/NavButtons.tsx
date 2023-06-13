import './NavButtons.scss';

export const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <a
        href="/favorites"
        className="nav-buttons__element"
      >
        <img
          src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/favorites.png"
          alt="favorites icon"
          className="nav-buttons__icon"
        />
      </a>
      <a
        href="/cart"
        className="nav-buttons__element"
      >
        <img
          src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/cart.png"
          alt="cart icon"
          className="nav-buttons__icon"
        />
      </a>
    </div>
  );
};
