import './ProductList.scss';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/phone';
import { PhoneCard } from '../PhoneCard';
import { useEffect, useState } from 'react';


export const ProductList: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, []);

  return (
    <section className="products">
        {phones.map(phone => (
            <PhoneCard 
              key={phone.id}
              phone={phone}
            />
        ))}
    </section>
  )
}