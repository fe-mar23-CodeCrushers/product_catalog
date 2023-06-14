import { useParams } from 'react-router-dom';

import './ProductPage.scss';

export const ProductPage = () => {
  const { id } = useParams();
  
  return (
    <main className="main">
      <h1 className="heading__primary"><strong>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</strong></h1>

      <section className="section__hero">
        <div className="section__hero--phone">
          <div className="section__hero--phone-top">
            <img src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/phone-1.png" alt="0" />
          </div>
          
          <div className="section__hero--phone-bottom">
            <div className="phone__image">
              <img src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/phone-2.png" alt="phone" />
            </div>
            <div className="phone__image">
              <img src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/phone-3.png" alt="phone" />
            </div>
            <div className="phone__image">
              <img src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/phone-4.png" alt="phone" />
            </div>
            <div className="phone__image">
              <img src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/phone-5.png" alt="phone" />
            </div>
            <div className="phone__image">
              <img src="https://raw.githubusercontent.com/fe-mar23-CodeCrushers/product_catalog/main/public/img/phone-4.png" alt="phone" />
            </div>
          </div>
        </div>
        
        <div className="section__hero--details">
          <div className="generic">
            <div className="colors">
              <p className="colors--p">Available colors</p>
              <div className="colors__btns">
                <button className="colors__btn colors__btn--1 colors__btn--active"></button>
                <button className="colors__btn colors__btn--2"></button>
                <button className="colors__btn colors__btn--3"></button>
                <button className="colors__btn colors__btn--4"></button>
              </div>
            </div>
            
            <div className="id">
              <p className="id--p">
                <strong>ID: <span className="product__id">802390</span></strong>
              </p>
            </div>
          </div>

          <div className="capacity">
            <p className="capacity--p">Select capacity</p>

            <div className="capacity__btns">
              <button className="capacity__btn capacity__btn--active">64 GB</button>
              <button className="capacity__btn">256 GB</button>
              <button className="capacity__btn">512 GB</button>
            </div>

          </div>

          <div className="price">
            <p className="price--discount">
              <strong>$799</strong> 
              <del className="price--original">$1199</del>
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
              <p className="parameter--p-sm parameter--p-dark">6.5” OLED</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-sm parameter--p-light">Resolution</p>
              <p className="parameter--p-sm parameter--p-dark">2688x1242</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-sm parameter--p-light">Processor</p>
              <p className="parameter--p-sm parameter--p-dark">Apple A12 Bionic</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-sm parameter--p-light">RAM</p>
              <p className="parameter--p-sm parameter--p-dark">3 GB</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__description">
        <div className="about">
          <h2 className="heading__secondary">About</h2>

          <h3 className="heading__tertiary">And then there was Pro</h3>
          <p className="about--p">A transformative triple‑camera system that adds tons of capability without complexity.</p>
          <br />
          <p className="about--p">An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.</p>
            
          <h3 className="heading__tertiary">Camera</h3>
          <p className="about--p">Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.</p>
          
          <h3 className="heading__tertiary">Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h3>
          <p className="about--p">iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.</p>
        </div>

        <div className="tech">
          <h2 className="heading__secondary">Tech specs</h2>

          <div className="parameters">
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">Screen</p>
              <p className="parameter--p-md parameter--p-dark">6.5” OLED</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">Resolution</p>
              <p className="parameter--p-md parameter--p-dark">2688x1242</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">Processor</p>
              <p className="parameter--p-md parameter--p-dark">Apple A12 Bionic</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">RAM</p>
              <p className="parameter--p-md parameter--p-dark">3 GB</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">Built in memory</p>
              <p className="parameter--p-md parameter--p-dark">64 GB</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">Camera</p>
              <p className="parameter--p-md parameter--p-dark">12 Mp + 12 Mp + 12 Mp (Triple)</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">Zoom</p>
              <p className="parameter--p-md parameter--p-dark">Optical, 2x</p>
            </div>
            <div className="parameter">
              <p className="parameter--p-md parameter--p-light">Cell</p>
              <p className="parameter--p-md parameter--p-dark">GSM, LTE, UMTS</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}