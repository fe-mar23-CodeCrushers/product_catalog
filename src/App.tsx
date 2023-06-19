import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import { PhonesPage } from "./Pages/PhonesPage/PhonesPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Footer } from "./Components/Footer/Footer";
import { CartPage } from "./Pages/CartPage/CartPage";
import { NotFound } from "./Components/NotFound/NotFound";
import { createContext, useEffect, useState } from 'react';
import { Cart } from "./types/Cart";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { FavoritesPage } from "./Pages/FavoritesPage/FavoritesPage";
import { Phone } from "./types/phone";

export const cartContext = createContext<{ 
  cart: Cart[]; 
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  fav: Phone[];
  setFav: React.Dispatch<React.SetStateAction<Phone[]>>
}>({
  cart: [],
  setCart: () => {},
  fav: [],
  setFav: () => {}
});


export const App = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const savedFav = JSON.parse(localStorage.getItem('fav') || '[]')
  const [cart, setCart] = useState<Cart[]>(savedCart);
  const [fav, setFav] = useState<Phone[]>(savedFav);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav));
  }, [fav]);

  return (
    <cartContext.Provider value={{ cart, setCart, fav, setFav }}>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/phones" element={<PhonesPage/>} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </cartContext.Provider>
  )
}
