import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cafe from "../assets/cafe-img.jpeg";
import FeatureSection from '../components/FeatureSection';

function Home() {
  return (
    <div>
        <Navbar />
         <div className="relative w-full h-[600px] mt-16">

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

          <button className="bg-yellow-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-400">
            Explore Menu
          </button>

        </div>

        </div>

        <FeatureSection />

    <Footer />

    </div>
  )
}

export default Home