import { useContext } from 'react';
import { BackButton } from '../../Components/BackButton/BackButton';
import { PhoneCard } from '../../Components/PhoneCard';
import './FavoritesPage.scss';
import { cartContext } from '../../App';

export const FavoritesPage = () => {
  const { fav } = useContext(cartContext)

  return (
    <section className='favorites'>
      <BackButton />
      <h1 className='favorites__header'>Favorites</h1>
      <span className='favorites__count'>{fav.length} items</span>
      <div className='favroties__cards'>
        {fav.length > 0 ? (
          <ul className='products'>
            {fav.map(element => (
              <PhoneCard key={element.id} phone={element} />
            ))}
          </ul>
        ) : (
          <h3 className='favroties__empty'>You dont have any favroties</h3>
        )}
      </div>
    </section>
  )
}