import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './ProductPage.scss';

import { cartContext } from '../../App';
import { Phone } from '../../types/phone';
import { PhoneExtended } from '../../types/phoneExtended';
import { getPhoneDetails, getPhones } from '../../api/phones';
import { BackButton } from '../../Components/BackButton/BackButton';
import { SliderList } from '../../Components/SliderList/SliderList';

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState<PhoneExtended | null>(null);
  const [filteredPhones, setFilteredPhones] = useState<Phone[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { setCart, cart } = useContext(cartContext);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      const details = await getPhoneDetails(id!);
      setPhone(details);
    };

    const fetchPhones = async () => {
      const phones = await getPhones();
      const filteredLikedPhones = phones
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      setFilteredPhones(filteredLikedPhones);
    };

    fetchPhoneDetails();
    fetchPhones();
  }, [id]);

  if (!phone) {
    return null;
  }

  const {
    name, images, colorsAvailable, color, capacityAvailable,
    capacity, priceDiscount, priceRegular, description, screen, resolution,
    processor, ram, camera, zoom, cell
  } = phone;

  const addToCart = () => {
    setCart(prevCart => [
      ...prevCart,
      { 
        id: id!,
        image: images[selectedImageIndex],
        price: priceDiscount,
        name,
        quantity: 1
      }
    ]);
  };

  const isAdded = cart.find(item => item.name === name);

  const removeFromCart = () => {
    setCart(prevCart => prevCart.filter(cart => cart.name !== name));
  };

  const changeURL = (index: number, newParameter: string) => {
    const currentPhoneId = phone.id.split('-');
    const currentParameter = currentPhoneId.length - +index;
    currentPhoneId[currentParameter] = newParameter.toLocaleLowerCase();

    return currentPhoneId.join('-');
  }

  return (
    <div>
      <div className="product-page__container">
        <BackButton />

        <h1 className="heading__primary">
          <strong>{name}</strong>
        </h1>

        <section className="section__hero">
          <div className="section__hero--phone">
            <div className="section__hero--phone-top">
              <img src={require(`../../assets/${images[selectedImageIndex]}`)} alt="Phone" />
            </div>

            <div className="section__hero--phone-bottom">
              {images.map((image, index) => (
                <div
                  key={image}
                  className={`
                    phone__image 
                    ${index === selectedImageIndex && 'phone__image--active'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={require(`../../assets/${image}`)} alt="phone" />
                </div>
              ))}
            </div>
          </div>

          <div className="section__hero--details">
            <div className="generic">
              <div className="colors">
                <p className="colors--p">Available colors</p>

                <p className="id--p">
                  <strong>ID: <span className="product__id">802390</span></strong>
                </p>
              </div>

              <div className="colors__btns">
                {colorsAvailable.map((phoneColor) => {
                  const newPhoneURL = changeURL(1, phoneColor);

                  return (
                    <Link to={`/products/${newPhoneURL}`} key={phoneColor}>
                      <div
                        className={`
                          colors__btn 
                          ${phoneColor === color ? 'colors__btn--active' : ''
                        }`}
                        >
                        <span className="colors__btn-1"></span>
                        <span 
                          className="colors__btn-2" 
                          style={{ backgroundColor: phoneColor }}
                        ></span>
                      </div>
                    </Link>
                    )
                })}
              </div>
            </div>

            <div className="capacity">
              <p className="capacity--p">Select capacity</p>

              <div className="capacity__btns">
                {capacityAvailable.map((phoneCapacity) => {
                  const newPhoneURL = changeURL(2, phoneCapacity);

                  return (
                    <Link to={`/products/${newPhoneURL}`} key={phoneCapacity}>
                      <div
                        className={`
                          capacity__btn 
                          ${phoneCapacity === capacity ? 'capacity__btn--active' : ''
                        }`}
                      >
                        {phoneCapacity}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="price">
              <p className="price--discount">
                <strong>${priceDiscount}</strong>
                <del className="price--original">${priceRegular}</del>
              </p>

              <div className="price__btns">
                {!isAdded ? (
                  <button
                    className="price__btn price__btn--buy"
                    onClick={addToCart}
                  >
                    <strong>Add to cart</strong>
                  </button>
                ) : (
                  <button
                    className="price__btn price__btn--buy price__btn--remove"
                    onClick={removeFromCart}
                  >
                    <strong>Added</strong>
                  </button>
                )}

                <button className="price__btn price__btn--save">
                  <img
                    src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/favorites.png"
                    alt="Add to favourites"
                  />
                </button>
              </div>
            </div>

            <div className="parameters">
              <div className="parameter">
                <p className="parameter--p-sm parameter--p-light">Screen</p>
                <p className="parameter--p-sm parameter--p-dark">{screen}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-sm parameter--p-light">Resolution</p>
                <p className="parameter--p-sm parameter--p-dark">{resolution}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-sm parameter--p-light">Processor</p>
                <p className="parameter--p-sm parameter--p-dark">{processor}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-sm parameter--p-light">RAM</p>
                <p className="parameter--p-sm parameter--p-dark">{ram}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section__description">
          <div className="about">
            <h2 className="heading__secondary">About</h2>

            {description.map((desc, index) => (
              <div key={index}>
                <h3 className="heading__tertiary">{desc.title}</h3>
                {desc.text.map((txt: string, idx: number) => (
                  <p key={idx} className="about--p">{txt}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="tech">
            <h2 className="heading__secondary">Tech specs</h2>

            <div className="parameters">
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">Screen</p>
                <p className="parameter--p-md parameter--p-dark">{screen}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">Resolution</p>
                <p className="parameter--p-md parameter--p-dark">{resolution}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">Processor</p>
                <p className="parameter--p-md parameter--p-dark">{processor}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">RAM</p>
                <p className="parameter--p-md parameter--p-dark">{ram}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">Built-in memory</p>
                <p className="parameter--p-md parameter--p-dark">{capacity}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">Camera</p>
                <p className="parameter--p-md parameter--p-dark">{camera}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">Zoom</p>
                <p className="parameter--p-md parameter--p-dark">{zoom}</p>
              </div>
              <div className="parameter">
                <p className="parameter--p-md parameter--p-light">Cell</p>
                <p className="parameter--p-md parameter--p-dark">{cell.join(', ')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='product-page__slider'>
        <SliderList phones={filteredPhones} title="You may also like" />
      </div>
    </div>
  );
};