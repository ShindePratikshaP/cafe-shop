import React from 'react'
import coffee from "../assets/coffee.png" ;
import food from "../assets/food.jpg" ;
import cozy from "../assets/cozy.jpg" ;
import service from "../assets/service.jpg" ;


function FeatureCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h3 className=" text-center text-2xl font-semibold mb-2 text-[#3E2723]">
          {title}
        </h3>

        <p className="text-gray-600 text-sm text-center">
          {description}
        </p>

      </div>

    </div>
  );
}


const FEATURES_CONFIG = [
{
title: "Premium Coffee",
description: "Enjoy freshly brewed coffee made from high-quality coffee beans.",
image: coffee,
},
{
title: "Delicious Food",
description: "Taste our wide variety of freshly prepared snacks, desserts and meals.",
image: food,
},
{
title: "Cozy Atmosphere",
description: "Relax and spend quality time in our warm and comfortable café environment.",
image: cozy,
},
{
title: "Fast Service",
description: "Get your orders quickly with our efficient and friendly service.",
image: service,
},
];


function FeatureSection() {
  return (
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
    
  )
}

export default FeatureSection