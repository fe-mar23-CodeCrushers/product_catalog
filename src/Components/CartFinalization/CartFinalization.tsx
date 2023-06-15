import { useContext, useState } from 'react';
import { NotificationModal } from '../NotificationModal/NotificationModal';
import './CartFinalization.scss';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../App';

interface Props {
  totalCost: number;
}

export const CartFinalization: React.FC<Props> = ({ totalCost }) => {
  const [notification, setNotification] = useState<'success' | 'fail'>('fail');
  const [notificationMessage, setNotificationMessage] = useState('');

  const { setCart, cart } = useContext(cartContext);

  const sumOfItems = cart.reduce((sum, n) => sum + n.quantity, 0)

  const navigate = useNavigate();
  
  const handleCloseModal = () => {
    setNotificationMessage('');
  }

  const handleConfirmCheckout = () => {
    setNotificationMessage('Thank your for your money! :) Redirecting to Home Page in 3 sek')
    setCart([]);
     setTimeout(() => {
      navigate('/')
    }, 3000)
  }
  
  const handleCheckout = () => {
    if (totalCost > 0) {
      setNotification('success');
      setNotificationMessage(`You need to pay ${totalCost}$, Do you want to continue?`)
    } else {
      setNotification('fail')
      setNotificationMessage('Your cart is empty')
    }
  }

  return (
    <>
      <div className='cart-finalization'>
        <h2 className='cart-finalization__value'>
          ${totalCost}
        </h2>
        <span className='cart-finalization__total'>Total for {sumOfItems} items</span>
        <button className='cart-finalization__btn' onClick={handleCheckout}>
          Checkout
        </button>
      </div>

      {notificationMessage.length > 0 && (<NotificationModal
        text={notificationMessage} 
        type={notification} 
        handleCloseModal={handleCloseModal}
        handleConfirmCheckout={handleConfirmCheckout}
      />)}
  
      
    </>
  )
}