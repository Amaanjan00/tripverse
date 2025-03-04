import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Packages from '../Components/Packages'

function About() {
  return (
    <div>
      <Header/>
      <div className='p-40'>
        <h1 className='text-4xl font-bold'>About Us</h1>
        <br />
        <h2 className='font-medium'>Tripverse Travel & Tourism L.L.C</h2>
        <br />
        <p>At TripVerse Travel and Tourism L.L.C, we turn your travel dreams into reality. Based in the heart of Dubai, we specialize in crafting unforgettable travel experiences, from luxurious getaways to thrilling adventures. Whether you’re looking for curated holiday packages, seamless visa assistance, or personalized itineraries, our expert team ensures a hassle-free journey tailored to your preferences.Discover the world with TripVerse—where every journey tells a story! 🌍✈️</p>
      </div>
      <Footer/>
    </div>
  )
}

export default About
