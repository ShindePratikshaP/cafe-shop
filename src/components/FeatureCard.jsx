import React from 'react'
import coffee from "../assets/coffee.jpg" ;
import food from "../assets/food.jpg" ;
import cozy from "../assets/cozy.jpg" ;
import service from "../assets/service.jpg" ;


function FeatureCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-semibold mb-2 text-[#3E2723]">
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

export default FeatureCard;