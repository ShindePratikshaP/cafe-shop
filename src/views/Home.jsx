import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cafe from "../assets/cafe-img.jpeg";
import FeatureCard from '../components/FeatureCard';

function Home() {
  return (
    <div>
        <Navbar />
         <div className="relative w-full h-[600px]">

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
        <div className="py-16 bg-[#F5E6D3]">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose DreamLight Cafe
        </h2>

      < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">

        {FEATURES_CONFIG.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
        />
        ))}

      </div>

      </div>

    <Footer />

    </div>
  )
}

export default Home