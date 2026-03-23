import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cafe from "../assets/cafe-img.jpeg";
import FeatureSection from '../components/FeatureSection';
import Button from '../components/Button';

function Home() {
  return (
    <div>
        <Navbar />
         <div className="relative w-full h-[700px] ">

        <img
          src={cafe}
          alt="Cafe"
          className="w-full h-full object-cover"
        />

  
        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 flex flex-col items-center pt-30 text-white text-center">

          <h1 className="text-5xl font-bold mb-4">
            Welcome to DreamLight Cafe 
          </h1>

          <p className="text-xl mb-6">
            Fresh Coffee • Delicious Food • Cozy Atmosphere
          </p>
          <div className='flex flex-col md:flex-row gap-4 mt-4 justify-center'>
            <Button title="Call us" variant="secondary" size="large" />
            <Button title="Explore Menu" variant="primary" size="large" />
          </div>
          

        </div>

        </div>

        <FeatureSection />

    <Footer />

    </div>
  )
}

export default Home