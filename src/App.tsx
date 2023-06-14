import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import { PhonesPage } from "./Pages/PhonesPage/PhonesPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Footer } from "./Components/Footer/Footer";
import { CartPage } from "./Pages/CartPage/CartPage";

// Temporary
import { ProductPage } from "./Pages/ProductPage/ProductPage";

export const App = () => (
  <div className="app">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/phones" element={<PhonesPage/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </main>
    <Footer />
  </div>
)

