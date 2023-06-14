import './NavButtons.scss';
import { PageLink } from '../PageLink/PageLink';

export const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <PageLink 
        to='favorites' 
        classNames='nav-buttons__element' 
        innerValue={
          <img
            src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Favourites%20(Heart%20Like).png"
            alt="favorities icon"
            className="nav-buttons__icon"
          />
        }/>
      <PageLink 
        to='cart' 
        classNames='nav-buttons__element' 
        innerValue={
          <img
            src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/header/public/img/Icons/Shopping%20bag%20(Cart).png"
            alt="favorities icon"
            className="nav-buttons__icon"
          />
        }/>
    </div>
  );
};
