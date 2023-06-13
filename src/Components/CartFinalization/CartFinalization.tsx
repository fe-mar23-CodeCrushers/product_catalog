import { useState } from 'react';
import { NotificationModal } from '../NotificationModal/NotificationModal';
import './CartFinalization.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
  totalCost: number;
}

export const CartFinalization: React.FC<Props> = ({ totalCost }) => {
  const [notification, setNotification] = useState<'success' | 'fail'>();
  const [notificationMessage, setNotificationMessage] = useState('');

  const navigate = useNavigate();


  const handleCheckout = () => {
    if (totalCost > 0) {
      setNotification('success');
      setNotificationMessage(`Finalizing your cart... You need to pay ${totalCost}$, Redirecting to home Page in 3s`)

      setTimeout(() => {
        navigate('/')
      }, 3000)
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
        <span className='cart-finalization__total'>Total for 3 items</span>
        <button className='cart-finalization__btn' onClick={handleCheckout}>
          Checkout
        </button>
      </div>

      {notification && (<NotificationModal text={notificationMessage} type={notification} />)}
  
      
    </>
  )
}