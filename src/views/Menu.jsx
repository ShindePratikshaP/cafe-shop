import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MENU_DATA  from './data.json';
import MenuCard from '../components/MenuCard';
import toast,{Toaster} from 'react-hot-toast';

function Menu() {
  function addToCart(item) {
    const [refresh, setRefresh] = React.useState(false);  

    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = existingCartItems.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      existingCartItems[itemIndex]= item;
    } else {
      existingCartItems.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    setTimeout(() => {
      setRefresh(!refresh);
      toast.success("Item added to cart");
    }, 1000);

  }

  return (
    <div>
      <Navbar />
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