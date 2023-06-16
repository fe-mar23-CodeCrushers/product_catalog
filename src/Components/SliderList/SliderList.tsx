import { useEffect, useRef, useState } from 'react';
import { PhoneCard } from '../PhoneCard';
import './SliderList.scss';
import { Phone } from '../../types/phone';

interface Props {
  phones: Phone[],
  title: string,
}

export const SliderList: React.FC<Props> = ({ phones, title }) => {
  const [slide, setSlider] = useState(0);
  const sliderListElementsRef = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);



  useEffect(() => {
    if (sliderListElementsRef.current) {
      const sliderListElementsWidth = sliderListElementsRef.current.offsetWidth;
      setSlideWidth(sliderListElementsWidth);
    }
  }, [phones]);

    const handleNextSlide = () => {
    if (slide === phones.length - 1) {
      setSlider(0)
    } else {
      setSlider(prevState => prevState + 1)
    }
  }


  const handlePrevSlide = () => {
    if (slide === 0) {
      setSlider(phones.length - 1)
    } else {
      setSlider(prevState => prevState - 1)
    }
  }

  return (
    <section className='slider-list'>
      <h2 className='slider-list__title'>{title}</h2>
      <div className='slider-list__controls'>
        <button className='slider-list__btn' onClick={handlePrevSlide}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4712 3.52864C10.2109 3.26829 9.78878 3.26829 9.52843 3.52864L5.52843 7.52864C5.26808 7.78899 5.26808 8.2111 5.52843 8.47145L9.52843 12.4714C9.78878 12.7318 10.2109 12.7318 10.4712 12.4714C10.7316 12.2111 10.7316 11.789 10.4712 11.5286L6.94265 8.00004L10.4712 4.47145C10.7316 4.2111 10.7316 3.78899 10.4712 3.52864Z" fill="#313237"/>
          </svg>
        </button>
        <button className='slider-list__btn' onClick={handleNextSlide}>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528758 0.528636C0.789108 0.268287 1.21122 0.268287 1.47157 0.528636L5.47157 4.52864C5.73192 4.78899 5.73192 5.2111 5.47157 5.47145L1.47157 9.47145C1.21122 9.7318 0.789108 9.7318 0.528758 9.47145C0.268409 9.2111 0.268409 8.78899 0.528758 8.52864L4.05735 5.00004L0.528758 1.47145C0.268409 1.2111 0.268409 0.788986 0.528758 0.528636Z" fill="#313237"/>
          </svg>
        </button>
      </div>
      <div 
        className='slider-list__elements'
        ref={sliderListElementsRef}
        style={{
          transform: `translateX(-${slide * (slideWidth + 24)}px)`,
        }}
      >
        {phones.map(phone => (
          <div className="phone-item" ref={sliderListElementsRef}>
            <PhoneCard 
              key={phone.id}
              phone={phone}
            />
          </div>
        ))}
      </div>
    </section>
  );
}