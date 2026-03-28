import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MENU_DATA  from './data.json';
import MenuCard from '../components/MenuCard';
import toast,{Toaster} from 'react-hot-toast';
import { useState } from 'react';

function Menu() {
  const [refreshCart, setRefreshCart] = useState(false);

  function addToCart(item) { 

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCartItems.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      existingCartItems[itemIndex]= item;
    } else {
      existingCartItems.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("Item added to cart");
    }, 1000);

  }

  return (
    <div>
      <Navbar refreshCart={refreshCart}/>
      <div className='min-h-screen mt-[70px]'>
        <div className='flex flex-wrap justify-center'>
        {
            MENU_DATA.map((menuItem)=>{
              return(
                <MenuCard key={menuItem.id} {...menuItem} addToCart={addToCart} />
              );
            })
        }
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  )
}

export default Menu