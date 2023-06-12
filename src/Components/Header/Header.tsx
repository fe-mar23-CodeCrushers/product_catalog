import { NavButtons } from '../NavButtons/NavButtons';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Logo.png"
        alt="header logo"
      />

      <Navbar />
      <NavButtons />

    </header>
  );
}