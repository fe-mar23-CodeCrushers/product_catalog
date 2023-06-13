import './Header.scss';

import { Nav } from '../Nav/Nav';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a
            href="https://fe-mar23-codecrushers.github.io/product_catalog/"
            className="header__logo"
            title="Nice Gadgets"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="header__logo-img"
              src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Logo.png"
              alt="Nice Gadgets logo"
            />
          </a>

        <Nav />
     </div>
    </header>
  );
}