import { useState } from 'react';
import './CartElement.scss';

interface Props {
  setTotalCost: (callback: (prevState: number) => number) => void;
}

export const CartElement: React.FC<Props> = ({ setTotalCost }) => {
  const singleValue = 999; // from localStorageHere

  const [count, setCount] = useState(0);

  const handleSubstract = () => {
    if (count === 0) {
      return
    }
    setCount(prevCount => prevCount - 1)
    setTotalCost(prevState => prevState - singleValue);
  }

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1)
    setTotalCost(prevState => prevState + singleValue);
  }

  return (
    <div className='cart-element'>
      <button className='cart-element__delete'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4721 4.47138C12.7324 4.21103 12.7324 3.78892 12.4721 3.52858C12.2117 3.26823 11.7896 3.26823 11.5292 3.52858L8.00065 7.05717L4.47206 3.52858C4.21171 3.26823 3.7896 3.26823 3.52925 3.52858C3.2689 3.78892 3.2689 4.21103 3.52925 4.47138L7.05784 7.99998L3.52925 11.5286C3.2689 11.7889 3.2689 12.211 3.52925 12.4714C3.7896 12.7317 4.21171 12.7317 4.47206 12.4714L8.00065 8.94279L11.5292 12.4714C11.7896 12.7317 12.2117 12.7317 12.4721 12.4714C12.7324 12.211 12.7324 11.7889 12.4721 11.5286L8.94346 7.99998L12.4721 4.47138Z" fill="#B4BDC4"/>
        </svg>
      </button>
      <img 
        className='cart-element__image' 
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
        src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/cartPage/public/img/image%208.png"
      ></img>
      <h2 className='cart-element__title'>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h2>
  
      <div className="cart-element__count count">
        <button 
          className='count__btn' 
          onClick={handleSubstract}
          disabled={count === 0}
        >
          -
        </button>
        <span className='count__value'>{count}</span>
        <button className='count__btn' onClick={handleAdd}>+</button>
      </div>
  
      <div className="cart-element__value">
        $999
      </div>
    </div>
  );
}