import { Link } from 'react-router-dom';
import { Category } from '../../types/Category';
import './Categories.scss';

interface Props {
  categories: Category[],
}

export const Categories: React.FC<Props> = ({ categories }) => {

  const categoriesElements = categories.map(category => (
    <div className="categories__element">
      <img src={category.image} alt="" className='categories__element-image'></img>
      <Link to={category.to} className='categories__element-title'>
        <h3>{category.name}</h3>
      </Link>
      
      <span className='categories__element-count'>{category.count} models</span>
    </div>
  ))

  return (
    <section className='categories'>
      <h2 className='categories__title'>Shop by category</h2>
      <div className="categories__list">
        {categoriesElements}
      </div>
    </section>
  );
}