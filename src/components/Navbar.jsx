import React from 'react'
import { ShoppingCart} from 'lucide-react'
import { Link } from 'react-router-dom';

function Navbar({refreshCart}) {
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(existingCartItems);
  }, [refreshCart]);

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 text-yellow-400 w-[90%] px-10 py-2 bg-white/20 backdrop-blur-md flex justify-between items-center rounded-full shadow-md z-50 text-white">
      <h2>DreamLight Cafe</h2>
      <Link to="/MyCart" className="relative ml-auto">
        {cartItems.length > 0 ? (
          <span className='absolute -top-1 right-0 bg-[#6d403b] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
            {cartItems.length}
          </span>
        ) : null}
        <ShoppingCart className=' font-bold inline-block hover:text-amber-600' size={35} strokeWidth={1}/>
      </Link>
    </div>
  )}

export default Navbar