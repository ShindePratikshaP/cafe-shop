import React from 'react'
import logo from "../assets/cafe-logo.png";

function Navbar() {
  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 text-yellow-400 w-[90%] px-10 py-2 bg-white/20 backdrop-blur-md flex justify-between items-center rounded-full shadow-md z-50 text-white">
      <h2>DreamLight Cafe</h2>
    </div>
  )
}

export default Navbar