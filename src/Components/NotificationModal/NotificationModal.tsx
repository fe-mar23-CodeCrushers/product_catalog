import { Link } from 'react-router-dom';
import './NotificationModal.scss';

interface Props {
  type: 'success' | 'fail',
  text: string,
  handleCloseModal: () => void,
  handleConfirmCheckout: () => void,
}

export const NotificationModal: React.FC<Props> = ({
  type,
  text, 
  handleCloseModal,
  handleConfirmCheckout,
}) => (
  <div className="notification">
    <div className={`notification__container`}>
      <h2 className='notification__text'>{text}</h2>
      {type === 'success' ? (
        <>
          <button className='notification__btn notification__btn--danger' onClick={handleCloseModal}>No</button>
          <button className='notification__btn' onClick={handleConfirmCheckout}>Yes</button>
        </>
      ): (
        <Link to="/phones" className='notification__back'>Back To Phones</Link>
      )}
    </div>
  </div>
)