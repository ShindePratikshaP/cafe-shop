import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MENU_DATA  from './data.json';
import MenuCard from '../components/MenuCard';

function Menu() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen mt-[70px]'>
        <div className='flex flex-wrap justify-center'>
        {
            MENU_DATA.map((menuItem)=>{
              return(
                <MenuCard key={menuItem.id} {...menuItem} />
              );
            })
        }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu