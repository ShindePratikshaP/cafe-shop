import React from 'react'
import Button from './Button';

const removeFromCart = (id) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCartItems = existingCartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.location.reload();
}

function CartMenuCart({
    id,
    name,
    price,
    image,
    description,
    quantity
}) {
  return (
    <div>
  <div className='bg-white rounded-xl border border-transparent shadow-lg overflow-hidden 
    hover:border hover:border-amber-800 transition duration-300
    m-2 p-2 flex flex-row items-stretch' key={id}>

    <div>
      <img src={image} alt={name} className='w-35 h-33 object-cover rounded-md' />
    </div>

    <div className='p-2 ml-4 flex flex-col justify-between w-full min-h-[120px]'>

    
      <div>
        <h3 className='text-[12px] font-semibold'>{name}</h3>
        <p className='font-light'>{description}</p>

        <div className='flex justify-between items-center mb-1'>
            <span className='text-[16px] font-bold'>₹{price}</span>
            <span className='text-[14px]'>Quantity : {quantity}</span>
            <p className='font-light'>Total : ₹{price * quantity}/-</p>
      </div>

      
      <div className='flex justify-end'>
        <Button title="Remove From Cart" size="small" variant="tertiary" 
            onClick={()=>{
                removeFromCart(id);
            }}

        />
      </div>

    </div>

  </div>
</div>
</div>
  )
}

export default CartMenuCart