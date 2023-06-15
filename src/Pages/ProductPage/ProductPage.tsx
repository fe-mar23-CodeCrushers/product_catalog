import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './ProductPage.scss';
import { getPhoneDetails, getPhones } from '../../api/phones';
import { SliderList } from '../../Components/SliderList/SliderList';
import { Phone } from '../../types/phone';
import { PhoneExtended } from '../../types/phoneExtended';


export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState<PhoneExtended | null>(null);
  const [filteredPhones, setFilteredPhones] = useState<Phone[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();

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
    name,
    images,
    colorsAvailable,
    color,
    capacityAvailable, 
    capacity,
    priceDiscount,
    priceRegular, 
    description, 
    screen, 
    resolution, 
    processor, 
    ram, 
    camera, 
    zoom, 
    cell 
  } = phone;

  return (
    <div className="product-page__container">
      <button className="cart__back" onClick={() => navigate(-1)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4708 3.52861C10.2104 3.26826 9.78829 3.26826 9.52794 3.52861L5.52794 7.52861C5.26759 7.78896 5.26759 8.21107 5.52794 8.47141L9.52794 12.4714C9.78829 12.7318 10.2104 12.7318 10.4708 12.4714C10.7311 12.2111 10.7311 11.789 10.4708 11.5286L6.94216 8.00001L10.4708 4.47141C10.7311 4.21107 10.7311 3.78896 10.4708 3.52861Z" fill="#313237"/>
        </svg>
        Back
      </button>


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
                className={`phone__image ${index === selectedImageIndex && 'phone__image--active'}`}
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
              {colorsAvailable.map((phoneColor) => (
                <button
                  key={phoneColor}
                  className={`colors__btn ${phoneColor === color ? 'colors__btn--active' : ''}`}
                >
                  <span className="colors__btn-1"></span>
                  <span className="colors__btn-2" style={{ backgroundColor: phoneColor }}></span>
                </button>
              ))}
            </div>
          </div>

          <div className="capacity">
            <p className="capacity--p">Select capacity</p>

            <div className="capacity__btns">
              {capacityAvailable.map((phoneCapacity) => (
                <button
                  key={phoneCapacity}
                  className={`capacity__btn ${phoneCapacity === capacity ? 'capacity__btn--active' : ''}`}
                >
                  {capacity}
                </button>
              ))}
            </div>
          </div>

          <div className="price">
            <p className="price--discount">
              <strong>${priceDiscount}</strong>
              <del className="price--original">${priceRegular}</del>
            </p>

            <div className="price__btns">
              <button className="price__btn price__btn--buy">
                <strong>Add to cart</strong>
              </button>
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

      {/* <SliderList phones={filteredPhones} title="You may also like" /> */}
    </div>
  );
};