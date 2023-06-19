import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './PhoneCard.scss';
import { Phone } from '../../types/phone';
import { ToggleFav } from '../Favourites/Favourites';
import { cartContext } from '../../App';

interface PhoneCardProps {
  phone: Phone,
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  const { id, phoneId, name, fullPrice, price, screen, capacity, ram, image, color, year } = phone;
  const priceLowered = fullPrice !== price;

  const { setCart, cart, setFav, fav } = useContext(cartContext);

  console.log(fav);

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

  const addToFav = () => {
    setFav(prevFav => [
      ...prevFav,
      {
        id,
        name,
        fullPrice,
        price,    
        screen,
        capacity,
        color,
        ram,
        year,
        image,
        phoneId,
      }
    ])
  }

  const isAdded = cart.find(item => item.id === id);
  const isFavAdded = fav.find(item => item.id === id);

  const removeFromCart = () => {
    setCart(prevCart => prevCart.filter(cart => cart.id !== id));
  };

  const removeFromFav = () => {
    setFav(prevFav => prevFav.filter(fav => fav.id !== id))
  }

  return (
    <div className="phone">
      <div className="phone__photospace">
        <img
          src={require(`../../assets/${image}`)}
          alt={name}
          className="phone__photospace--image"
        />
      </div>

      <Link to={`/products/${phoneId}`}>
        <div className="phone__name">{name}</div>
      </Link>

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
          
          {!isFavAdded ? (
            <button
              className="phone__buttons-favwrapper"
              onClick={addToFav}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62852 1.63142C10.1584 1.41184 10.7264 1.29883 11.3 1.29883C11.8737 1.29883 12.4416 1.41184 12.9716 1.63142C13.5015 1.85099 13.983 2.17282 14.3885 2.57852C14.7941 2.98398 15.1158 3.46537 15.3353 3.99519C15.5549 4.52511 15.6679 5.0931 15.6679 5.66671C15.6679 6.24032 15.5549 6.80831 15.3353 7.33824C15.1158 7.86811 14.794 8.34953 14.3884 8.75502C14.3883 8.75506 14.3884 8.75498 14.3884 8.75502L8.49502 14.6484C8.22165 14.9217 7.77844 14.9217 7.50507 14.6484L1.61174 8.75502C0.792668 7.93595 0.33252 6.82505 0.33252 5.66671C0.33252 4.50837 0.792668 3.39747 1.61174 2.5784C2.43081 1.75933 3.54171 1.29918 4.70005 1.29918C5.85839 1.29918 6.96928 1.75933 7.78835 2.5784L8.00005 2.7901L8.21162 2.57852C8.21158 2.57856 8.21166 2.57848 8.21162 2.57852C8.61711 2.17288 9.09865 1.85097 9.62852 1.63142ZM13.3983 3.56824C13.1228 3.29261 12.7957 3.07396 12.4357 2.92479C12.0756 2.77561 11.6898 2.69883 11.3 2.69883C10.9103 2.69883 10.5245 2.77561 10.1644 2.92479C9.80441 3.07396 9.4773 3.29261 9.2018 3.56824L8.49502 4.27502C8.22165 4.54839 7.77844 4.54839 7.50507 4.27502L6.7984 3.56835C6.24189 3.01183 5.48708 2.69918 4.70005 2.69918C3.91301 2.69918 3.15821 3.01183 2.60169 3.56835C2.04517 4.12487 1.73252 4.87967 1.73252 5.66671C1.73252 6.45375 2.04517 7.20855 2.60169 7.76507L8.00005 13.1634L13.3984 7.76507C13.674 7.48957 13.8928 7.16235 14.042 6.80233C14.1911 6.4423 14.2679 6.05642 14.2679 5.66671C14.2679 5.27701 14.1911 4.89112 14.042 4.5311C13.8928 4.17107 13.6739 3.84374 13.3983 3.56824Z" fill="#313237"/>
              </svg>
            </button>
          ) : (
            <button
              className="phone__buttons-favwrapper"
              onClick={removeFromFav}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2996 1.29877C10.7259 1.29877 10.158 1.41178 9.62803 1.63136C9.09816 1.85091 8.61662 2.17281 8.21113 2.57846L7.99956 2.79003L7.78787 2.57834C6.9688 1.75927 5.8579 1.29912 4.69956 1.29912C3.54122 1.29912 2.43032 1.75927 1.61125 2.57834C0.79218 3.39741 0.332031 4.50831 0.332031 5.66665C0.332031 6.82499 0.79218 7.93589 1.61125 8.75496L7.50458 14.6483C7.77795 14.9217 8.22117 14.9217 8.49453 14.6483L14.3879 8.75496C14.7935 8.34947 15.1153 7.86805 15.3349 7.33817C15.5544 6.80825 15.6674 6.24026 15.6674 5.66665C15.6674 5.09304 15.5544 4.52505 15.3349 3.99513C15.1153 3.46531 14.7936 2.98392 14.388 2.57846C13.9825 2.17276 13.501 1.85093 12.9711 1.63136C12.4412 1.41178 11.8732 1.29877 11.2996 1.29877Z" fill="#EB5757"/>
              </svg>  
            </button>
          )}
          
        </div>

      </div>
    </div>
  )
}