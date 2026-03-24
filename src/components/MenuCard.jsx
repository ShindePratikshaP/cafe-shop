import React, { useState } from 'react'
import Button from './Button';
import{CircleMinus, CirclePlus} from "lucide-react";
import {Toaster, toast} from "react-hot-toast";

function MenuCard({
    id,
    name,
    image,
    price,
    description,
}) {
    const [quantity,setquantity] = useState(1);
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300
         m-5 p-4 w-70' key={id}>
        <img 
            src={image}
            alt={name}
            className='w-full h-40 object-cover rounded-md'
        />
        <h3>{name}</h3>
        <p>{description}</p>
        <div className='flex items-center justify-between mt-3'>
        <p className='font-bold text-[18px]'>₹{price}/-</p>

        <div className='flex flex-col'>
            
        <div className='flex items-center gap-2 my-4 mb-0.5 justify-center'>
            <button><CircleMinus
            className='cursor-pointer' 
                onClick={()=>{
                    if(quantity>1){
                        setquantity(quantity-1);
                    } else {
                        toast.error("Quantity cannot be less than 1");
                    }
                }} />
                </button>
            <span>{quantity}</span>
            <CirclePlus 
                className='cursor-pointer'
                onClick={()=>{
                    if(quantity<10){
                        setquantity(quantity+1);
                    }else {                        
                        toast.error("Quantity cannot be more than 10");
                    }
            }} />
            </div>
            <p className='mb-0.5 font-light text-base'>Total : ₹{price * quantity}/-</p>
        </div>
        </div>
        <div className='flex justify-center'>
        <Button title={"Add To Cart"} 
            variant="tertiary" 
            size="medium" 
            />
            </div>
            <Toaster />
    </div>
  )
}

export default MenuCard