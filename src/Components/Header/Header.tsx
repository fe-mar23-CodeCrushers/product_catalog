import './Header.scss';

import { Nav } from '../Nav/Nav';
import { PageLink } from '../PageLink/PageLink';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <PageLink 
          to='/home' 
          classNames='header__logo' 
          innerValue={
            <img
              className="header__logo-img"
              src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Logo.png"
              alt="Nice Gadgets logo"
            />
          }/>
        <Nav />
     </div>
    </header>
  );
}