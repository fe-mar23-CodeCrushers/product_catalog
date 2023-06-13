import './PhoneCard.scss';
import { Phone } from '../../types/phone';
import { useState } from 'react';

interface PhoneCardProps {
  phone: Phone,
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  const [active, setActive] = useState(false);
  const { name, fullPrice, price, screen, capacity, ram, image } = phone;
  const priceLowered = fullPrice !== price;

  const handleFavouritesClick = () => {
    setActive(!active);
  }

  return (

    <div className="phone">
      <div className="phone__photospace">
        <img
          src={image}
          alt={name}
          className="phone__photospace--image"
        />
      </div>

      <div className="phone__name">{name}</div>
      <div className="phone__price">{`$${price}`}{priceLowered && <span className="phone__price--before">{`$${fullPrice}`}</span>}</div>
      <div className="phone__details">
        <div className="phone__details-line">
          <div className="phone__details-label">Screen</div>
          <div className="phone__details-value">{screen}</div>
        </div>

        <div className="phone__details-line">
          <div className="phone__details-label">Capacity</div>
          <div className="phone__details-value">{`${capacity.slice(0, -2)}${' '}${capacity.slice(-2)}`}</div>
        </div>

        <div className="phone__details-line">
          <div className="phone__details-label">RAM</div>
          <div className="phone__details-value">{`${ram.slice(0, -2)} ${ram.slice(-2)}`}</div>
        </div>

        <div className="phone__buttons">
          <a
            href="#addtocart"
            className="phone__buttons-cart"
            onClick={() => { }}
          >Add to cart
          </a>

          <a
            href="#addtofavourites"
            className="phone__buttons-favwrapper"
            onClick={handleFavouritesClick}>
            <img alt="add to favourites icon" className="phone__favourites-icon" src="assets/favourite.png"></img>
          </a>
        </div>

      </div>
    </div>
  )
}