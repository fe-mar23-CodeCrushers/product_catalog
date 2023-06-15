import './ProductList.scss';
import { Phone } from '../../types/phone';
import { PhoneCard } from '../PhoneCard';

interface ProductListProps {
  phones: Phone[];
}

export const ProductList: React.FC<ProductListProps> = ({ phones }) => {
  
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