import React, { useEffect, useState } from 'react';
import { commerce } from './Ecommerce';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componets 
import Home from './Home';
import Cart from './Cart';
import Shop from './Shop';
import NavBar from './NavBar';

import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)

  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };


  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };



  useEffect(() => {
    fetchProducts();
    fetchCart();

  }, []);

  console.log(products); // 2 product 
  console.log(cart); //

  return (
    <BrowserRouter>
    
      <div className='App'>
        <NavBar totalItems={cart.total_items} />

        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/Shop' element={<Shop products={products}  onAddToCart={handleAddToCart} />}  />
          <Route path='/Cart' element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />}  />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App