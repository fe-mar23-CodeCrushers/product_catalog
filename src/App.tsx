import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import { PhonesPage } from "./Pages/PhonesPage/PhonesPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Footer } from "./Components/Footer/Footer";
import { CartPage } from "./Pages/CartPage/CartPage";
import { createContext, useEffect, useState } from 'react';
import { Cart } from "./types/Cart";

export const cartContext = createContext<{ cart: Cart[]; setCart: React.Dispatch<React.SetStateAction<Cart[]>> }>({
  cart: [],
  setCart: () => {}
});


export const App = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState<Cart[]>(savedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/phones" element={<PhonesPage/>} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </cartContext.Provider>
  )
}

