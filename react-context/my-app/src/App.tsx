import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { useState } from 'react';
import { CartContext, CartProduct } from './components/CartContext';
import { Product } from './lib';

export function App() {
  const [cart, setCart] = useState<CartProduct[]>([]);

  function addToCart(item: Product): void {
    const cartItem = { item, quantity: 1 };
    setCart([...cart, cartItem]);
  }

  const cartValue = { cart, addToCart };

  // function addToCart(item: Product): void {
  //   const cartItem = { item, quantity: 1 };
  //   setCart([...cart, cartItem]);
  // }
  // const cartValue = { cart, addToCart };
  return (
    <CartContext.Provider value={cartValue}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
