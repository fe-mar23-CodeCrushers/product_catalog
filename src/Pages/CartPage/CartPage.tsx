import { useContext, useState } from 'react';
import { CartElement } from '../../Components/CartElement/CartElement';
import { CartFinalization } from '../../Components/CartFinalization/CartFinalization';
import './CartPage.scss';
import { cartContext } from '../../App';
import { BackButton } from '../../Components/BackButton/BackButton';

export const CartPage = () => {
  const [totalCost, setTotalCost] = useState(0);

  const { cart } = useContext(cartContext)

  return (
    <section className='cart'>
      <BackButton />

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