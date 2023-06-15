import './PhoneCard.scss';
import { Phone } from '../../types/phone';
import { ToggleFav } from '../Favourites/Favourites';
import { useContext, useState } from 'react';
import { cartContext } from '../../App';

interface PhoneCardProps {
  phone: Phone,
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  const { id, name, fullPrice, price, screen, capacity, ram, image } = phone;
  const priceLowered = fullPrice !== price;

  const { setCart, cart } = useContext(cartContext);

  const addToCart = () => {
    setCart(prevCart => [
      ...prevCart,
      {
        id,
        image,
        price,
        name,
        quantity: 1,
      }
    ]);
  };

  const isAdded = cart.find(item => item.id === id);

  const removeFromCart = () => {
    setCart(prevCart => prevCart.filter(cart => cart.id !== id));
  };

  return (

    <div className="phone">
      <div className="phone__photospace">
        <img
          src={require(`../../assets/${image}`)}
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
          {!isAdded ? (
            <button
              className="phone__buttons-cart"
              onClick={addToCart}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="phone__buttons-cart phone__buttons-cart--added"
              onClick={removeFromCart}
            >
              Added
            </button>
          )}
          

          <a
            href="#addtofavourites"
            className="phone__buttons-favwrapper"
            onClick={() => ToggleFav(id)}>
            <img alt="add to favourites icon" className="phone__favourites-icon" src={require('../../assets/favourite.png')}></img>
          </a>
        </div>

      </div>
    </div>
  )
}