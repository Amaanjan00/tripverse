import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import chauffervideo from '../assets/chauffervideo.mp4'
import Button from '../Components/Button'
import ScrollableChaufferCars from '../Components/ScrollableChaufferCars'

function ChaufferService() {
  return (
    <>
      <Header/>  
      <div>
        
        {/* Video */}

        <div className='relative h-[70vh] w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted src={chauffervideo}></video>
            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-700/90'></div>
            <div className='absolute text-start lg:text-center text-white bottom-10 inset-x-0 px-10 lg:px-0 lg:inset-x-20 lg:bottom-10 items-start lg:items-center flex flex-col gap-5'>
            <h1 className='text-2xl uppercase md:normal-case lg:text-5xl font-extrabold'>Arrive in Style, Travel in Comfort</h1>
            <p className='text-[14px] px-0 lg:px-0 uppercase md:normal-case lg:text-2xl'>Professional chauffeur services tailored for your every journey—luxury, safety, and peace of mind.</p>
            <Button/>
            </div>
        </div>

        {/* Scrollable Chaufer Cars */}

        <ScrollableChaufferCars/>


      </div>
      <Footer/>
    </>
  )
}

export default ChaufferService
