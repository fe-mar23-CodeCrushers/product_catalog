import './Footer.scss'

export const Footer = () => (
  <footer className="footer">
    <div className='footer__box'>
      <img className='footer__logo' src='https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/Footer/public/img/Logo.png' alt="sdsds"></img>

      <ul className="footer__list">
        <li>
          <a href='placeholder' className='footer__list__element'>GITHUB</a>
        </li>
        <li>
          <a href='placeholder' className='footer__list__element'>CONTACTS</a>
        </li>
        <li>
          <a href='placeholder' className='footer__list__element'>RIGHTS</a>
        </li>
      </ul>

      <div className='footer__return'>
        <span>Back to top</span>
        <a href='#top' onClick={(event) => {
          event.preventDefault();
          window.scrollTo(0, 0);
        }}>
          <div className='footer__return__box'>
            <img className='footer__return__img' src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/Footer/public/img/footerButtonImg.png" alt="dssds"></img>
          </div>
        </a>
      </div>
    </div>
  </footer>
)