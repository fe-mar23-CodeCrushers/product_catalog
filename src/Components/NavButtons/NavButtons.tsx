import './NavButtons.scss';

export const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <a
        href="/favorites"
        className="nav-buttons__element"
      >
        <img
          src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Favourites%20(Heart%20Like).png"
          alt="favorities icon"
          className="nav-buttons__icon"
        />
      </a>
      <a
        href="/cart"
        className="nav-buttons__element"
      >
        <img
          src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Shopping%20bag%20(Cart).png"
          alt="favorities icon"
          className="nav-buttons__icon"
        />
      </a>
    </div>
  );
};
