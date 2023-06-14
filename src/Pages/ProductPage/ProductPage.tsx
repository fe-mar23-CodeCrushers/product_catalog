import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ProductPage.scss';
import { getPhoneDetails } from '../../api/phones';
import { PhoneExtended } from '../../types/phoneExtended';

interface DescriptionPorps {
  title: string;
  text: string[];
}


export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState<PhoneExtended | null>(null);

  useEffect(() => {
    getPhoneDetails(id!)
      .then(setPhone);
  }, []);

  return (
    <main className="main">
      {phone && (
        <>
          <h1 className="heading__primary"><strong>{phone.name}</strong></h1>

          <section className="section__hero">
            <div className="section__hero--phone">
              <div className="section__hero--phone-top">
                <img src={require(`../../assets/${phone.images[0]}`)} alt="0" />
              </div>
              
              <div className="section__hero--phone-bottom">
                {Array.isArray(phone.images) && phone.images.map((image) => (
                  <div
                    key={image}
                    className="phone__image"
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
                    <strong>ID: <span className="product__id">{802390}</span></strong>
                  </p>
                </div>
                
                <div className="colors__btns">
                  {Array.isArray(phone.colorsAvailable) && phone.colorsAvailable.map((color) => (
                    <button
                      key={color}
                      className={`
                        colors__btn 
                        ${color === phone.color && 'colors__btn--active'}
                    `}>
                      <span className="colors__btn-1"></span>
                      <span className="colors__btn-2" style={{backgroundColor: color}}></span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="capacity">
                <p className="capacity--p">Select capacity</p>

                <div className="capacity__btns">
                  {Array.isArray(phone.capacityAvailable) && phone.capacityAvailable.map((capacity) => (
                    <button
                      key={capacity}
                      className={`
                        capacity__btn 
                        ${capacity === phone.capacity && 'capacity__btn--active'}
                      `}>
                        {capacity}
                      </button>
                  ))}
                </div>

              </div>

              <div className="price">
                <p className="price--discount">
                  <strong>${phone.priceDiscount}</strong> 
                  <del className="price--original">${phone.priceRegular}</del>
                </p>

                <div className="price__btns">
                  <button className="price__btn price__btn--buy"><strong>Add to cart</strong></button>
                  <button className="price__btn price__btn--save">
                    <img src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/Icons/favorites.png" alt="Add to favourites" />
                  </button>
                </div>
              </div>

              <div className="parameters">
                <div className="parameter">
                  <p className="parameter--p-sm parameter--p-light">Screen</p>
                  <p className="parameter--p-sm parameter--p-dark">{phone.screen}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-sm parameter--p-light">Resolution</p>
                  <p className="parameter--p-sm parameter--p-dark">{phone.resolution}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-sm parameter--p-light">Processor</p>
                  <p className="parameter--p-sm parameter--p-dark">{phone.processor}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-sm parameter--p-light">RAM</p>
                  <p className="parameter--p-sm parameter--p-dark">{phone.ram}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section__description">
            <div className="about">
              <h2 className="heading__secondary">About</h2>
              
              {phone.description.map(desc => {
                const { title = "", text = "" } = desc;
                return (
                  <div key={title}>
                    <h3 className="heading__tertiary">{title}</h3>

                    {Array.isArray(text) && text.map((txt: string, index: number) => (
                      <p key={index} className="about--p">{txt}</p>
                    ))}
                  </div>
                )
              })}
            </div>

            <div className="tech">
              <h2 className="heading__secondary">Tech specs</h2>

              <div className="parameters">
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">Screen</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.screen}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">Resolution</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.resolution}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">Processor</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.processor}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">RAM</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.ram}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">Built in memory</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.capacity}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">Camera</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.camera}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">Zoom</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.zoom}</p>
                </div>
                <div className="parameter">
                  <p className="parameter--p-md parameter--p-light">Cell</p>
                  <p className="parameter--p-md parameter--p-dark">{phone.cell.join(', ')}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}