import React from 'react'
import Footer from '../components/Footer'
import CartMenuCart from '../components/CartMenuCart';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

function MyCart() {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {
      const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(existingCartItems);
    }, []);

    useEffect(() => {
      let total = 0;
      cartItems.map((item)=> {
        total += item.price * item.quantity;
      })
      setTotalPrice(total);
    }, [cartItems]);
  return (
    <div>
        <Navbar />
        <h3 className='text-right font-light text-[14px] px-20 mt-[80px]'>Total Amount : ₹{totalPrice}/-</h3>
        <div className="min-h-screen flex flex-col w-[80%] mx-auto px-4 mt-2">
            {cartItems.map((item) => {
                return <CartMenuCart key={item.id} {...item} />
            })}
        </div>
        <Footer />
    </div>
  )
}

export default MyCart