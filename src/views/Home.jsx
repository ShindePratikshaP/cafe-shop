import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button' 

function Home() {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen bg-blue-300">
        <h1>Welcome to Our Dreamora Cafe</h1>
        <Footer />
        </div>
    </div>
  )
}

export default Home