import { useEffect, useState } from 'react';
import { Slider } from '../../Components/Slider/Slider';
import { SliderList } from '../../Components/SliderList/SliderList';
import './HomePage.scss';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/phone';
import { Categories } from '../../Components/Categories/Categories';
import { Category } from '../../types/Category';

export const HomePage = () => {
  const [brandNew, setBrandNew] = useState<Phone[]>([]);
  const [hotPrice, setHotPrice] = useState<Phone[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getPhones().then((res) => {
      const filteredBrandNew = res.filter((item) => item.year === 2019);
      setBrandNew(filteredBrandNew);

      const filteredHotPrice = res.filter((item) => item.price < item.fullPrice);
      setHotPrice(filteredHotPrice);

      setCategories(prevState => {
        return ([
          ...prevState,
          {
            name: 'Mobile phones',
            to: '/phones',
            image: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/listSlides/public/img/Phones.png',
            count: res.length,
          },
        ])
      })
    });
  }, []);


  return (
    <div className='home'>
      <h1 className='home__title'>Welcome to Nice Gadgets store!</h1>
  
      <Slider />
      <SliderList phones={brandNew} title={'Brand new models'} />
      <Categories categories={categories} />
      <SliderList phones={hotPrice} title={'Hot prices'} />
    </div>
  )
}