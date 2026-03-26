import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartMenuCart from '../components/CartMenuCart';

function MyCart() {

    const [cartItems, setCartItems] = React.useState([]);

    useEffect(() => {
      const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(existingCartItems);
    }, []);
  return (
    <div>
        <Navbar />
        <div className='min-h-screen mt-[70px] flex items-center justify-center text-2xl font-bold'>
            {cartItems.map((item) => {
                return <CartMenuCart key={item.id} {...item} />
            })}
        </div>
        <Footer />
    </div>
  )
}

export default MyCart