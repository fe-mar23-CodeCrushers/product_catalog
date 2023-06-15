import { useContext, useState } from 'react';
import { CartElement } from '../../Components/CartElement/CartElement';
import { CartFinalization } from '../../Components/CartFinalization/CartFinalization';
import './CartPage.scss';
import { useNavigate } from "react-router-dom";
import { cartContext } from '../../App';

export const CartPage = () => {
  const navigate = useNavigate();

  const [totalCost, setTotalCost] = useState(0);

  const { cart } = useContext(cartContext)

  return (
    <section className='cart'>
      <button className="cart__back" onClick={() => navigate(-1)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4708 3.52861C10.2104 3.26826 9.78829 3.26826 9.52794 3.52861L5.52794 7.52861C5.26759 7.78896 5.26759 8.21107 5.52794 8.47141L9.52794 12.4714C9.78829 12.7318 10.2104 12.7318 10.4708 12.4714C10.7311 12.2111 10.7311 11.789 10.4708 11.5286L6.94216 8.00001L10.4708 4.47141C10.7311 4.21107 10.7311 3.78896 10.4708 3.52861Z" fill="#313237"/>
        </svg>
        Back
      </button>
      <h1 className='cart__header'>Cart</h1>

      {cart.length > 0 ? (
        <ul className='cart__list'>
          {cart.map(element => (
            <CartElement cart={element} setTotalCost={setTotalCost} />
          ))}
        </ul>
      ) : (
        <h3 className='cart__empty'>Cart is empty</h3>
      )}
  
      <CartFinalization totalCost={totalCost} />
    </section>
  )
}