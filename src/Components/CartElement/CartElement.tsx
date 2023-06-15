import { useContext, useEffect, useState } from 'react';
import './CartElement.scss';
import { Cart } from '../../types/Cart';
import { cartContext } from '../../App';

interface Props {
  setTotalCost: (callback: (prevState: number) => number) => void;
  cart: Cart,
}

export const CartElement: React.FC<Props> = ({ setTotalCost, cart }) => {
  const { id, image, name, price, quantity } = cart;

  const { setCart } = useContext(cartContext);

  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setTotalCost(prevState => prevState + price * count);
  }, [])

  const handleSubstract = () => {
    if (count === 1) {
      return
    }
    setCount(prevCount => {
      const updatedCount = prevCount - 1;
      setCart(prevCart => {
        const updatedCart = prevCart.map(cartItem => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity: updatedCount };
          }
          return cartItem;
        });
        return updatedCart;
      });
      return updatedCount;
    });
    setTotalCost(prevState => prevState - price);
  }

  const handleAdd = () => {
    setCount(prevCount => {
      const updatedCount = prevCount + 1;
      setCart(prevCart => {
        const updatedCart = prevCart.map(cartItem => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity: updatedCount };
          }
          return cartItem;
        });
        return updatedCart;
      });
      return updatedCount;
    });
    setTotalCost(prevState => prevState + price);
  }

  const handleRemoveCartItem = () => {
    setTotalCost(prevState => prevState - price * count);
    setCart(prevCart => prevCart.filter(cart => cart.id !== id));
  }

  return (
    <div className='cart-element'>
      <button className='cart-element__delete' onClick={handleRemoveCartItem}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4721 4.47138C12.7324 4.21103 12.7324 3.78892 12.4721 3.52858C12.2117 3.26823 11.7896 3.26823 11.5292 3.52858L8.00065 7.05717L4.47206 3.52858C4.21171 3.26823 3.7896 3.26823 3.52925 3.52858C3.2689 3.78892 3.2689 4.21103 3.52925 4.47138L7.05784 7.99998L3.52925 11.5286C3.2689 11.7889 3.2689 12.211 3.52925 12.4714C3.7896 12.7317 4.21171 12.7317 4.47206 12.4714L8.00065 8.94279L11.5292 12.4714C11.7896 12.7317 12.2117 12.7317 12.4721 12.4714C12.7324 12.211 12.7324 11.7889 12.4721 11.5286L8.94346 7.99998L12.4721 4.47138Z" fill="#B4BDC4"/>
        </svg>
      </button>
      <div className="cart-element__image-container">
        <img 
          className='cart-element__image' 
          alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
          src={require(`../../assets/${image}`)}
        ></img>
      </div>
      <h2 className='cart-element__title'>
        {name}
      </h2>
  
      <div className="cart-element__count count">
        <button 
          className='count__btn' 
          onClick={handleSubstract}
          disabled={count === 1}
        >
          -
        </button>
        <span className='count__value'>{count}</span>
        <button className='count__btn' onClick={handleAdd}>+</button>
      </div>
  
      <div className="cart-element__value">
        ${price * count}
      </div>
    </div>
  );
}