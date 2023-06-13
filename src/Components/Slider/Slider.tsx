import { useEffect, useState } from 'react';
import './Slider.scss';

const slides = [
  {
    id: 0,
    url: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/Banner.png',
    urlMobile: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/image%2016.png',
  },
  {
    id: 1,
    url: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/Banner.png',
    urlMobile: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/image%2016.png',
  },
  {
    id: 2,
    url: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/Banner.png',
    urlMobile: 'https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/HomePage/public/img/image%2016.png',
  },
]

export const Slider = () => {
  const [slide, setSlider] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNextSlide = () => {
    console.log(slide)
    if (slide === slides.length - 1) {
      setSlider(0);
    } else {
      setSlider(prevState => prevState + 1)
    }
  }

  const handlePrevSlide = () => {
    if (slide === 0) {
      setSlider(slides.length - 1)
    } else {
      setSlider(prevState => prevState - 1)
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth <= 640;

  const slidesElements = slides.map(element => {
    return (
      <img 
        src={isMobile ? element.urlMobile : element.url}
        alt=""
        style={{
          transform: `translateX(-${slide * 100}%)`,
        }}
        className='slider__element'
      ></img>
    );
  })

  const slideButtons = slides.map(element => (
    <button 
      className={`slider__btn ${element.id === slide && 'slider__btn--active'}`}
      onClick={() => setSlider(element.id)}
    ></button>
  ))

  return (
    <section className='slider'>
      <button className='slider__prev' onClick={handlePrevSlide}>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47149 0.528606C5.21114 0.268256 4.78903 0.268256 4.52868 0.528606L0.528677 4.52861C0.268327 4.78896 0.268327 5.21107 0.528677 5.47141L4.52868 9.47141C4.78903 9.73176 5.21114 9.73176 5.47149 9.47141C5.73184 9.21107 5.73184 8.78896 5.47149 8.52861L1.94289 5.00001L5.47149 1.47141C5.73184 1.21107 5.73184 0.788955 5.47149 0.528606Z" fill="#313237"/>
        </svg>
      </button>
      <div className='slider__container'>
         {slidesElements}
      </div>
      <button className='slider__next' onClick={handleNextSlide}>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528758 0.528606C0.789108 0.268256 1.21122 0.268256 1.47157 0.528606L5.47157 4.52861C5.73192 4.78896 5.73192 5.21107 5.47157 5.47141L1.47157 9.47141C1.21122 9.73176 0.789108 9.73176 0.528758 9.47141C0.268409 9.21107 0.268409 8.78896 0.528758 8.52861L4.05735 5.00001L0.528758 1.47141C0.268409 1.21107 0.268409 0.788955 0.528758 0.528606Z" fill="#313237"/>
        </svg>
      </button>
      <div className='slider__pagination'>
        {slideButtons}
      </div>
    </section>
  );
}