import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import chauffervideo from '../assets/chauffervideo.mp4'
import Button from '../Components/Button'
import ScrollableChaufferCars from '../Components/ScrollableChaufferCars'
import chauffer1 from '../assets/chauffer1.jpg'
import chauffer2 from '../assets/chauffer2.jpg'
import chauffer3 from '../assets/chauffer3.jpeg'

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
            <h1 className='text-2xl uppercase md:normal-case lg:text-5xl font-extrabold'>Executive Chauffeur Service in Dubai — Where Comfort Meets Class</h1>
            <p className='text-[14px] px-0 lg:px-0 uppercase md:normal-case lg:text-2xl'>Chauffeur services tailored for your every journey—luxury, safety, and peace of mind.</p>
            <Button/>
            </div>
        </div>


        {/* Scrollable Chaufer Cars */}

        <ScrollableChaufferCars/>

        {/* chauffer details */}

        <div>
          <div className='flex flex-col lg:flex-row pt-10 bg-gray-800 md:p-14 justify-center items-center'>

            <div className='md:hidden px-10'>
              <h1 className='text-3xl text-left md:text-center text-yellow-500 font-bold uppercase'>Best in class chauffer service</h1>
            </div>

            <div className='grid grid-cols-2 p-8 gap-4 w-full'>
              <img className='h-70 object-cover rounded-2xl shadow-2xl' src={chauffer1} alt="" />
              <img className='h-70 object-cover rounded-2xl shadow-2xl' src={chauffer2} alt="" />
              <div className='col-span-2 px-4 py-2 flex justify-center items-center'>
                  <img className='h-70 object-cover shadow-2xl rounded-2xl' src={chauffer3} alt="" />
              </div>
            </div>

            <div className='p-6 px-10 flex flex-col gap-4 text-yellow-500 w-full'>
              <div className='flex flex-col gap-4'>
                <h1 className='hidden md:block text-5xl font-bold uppercase'>Dubai Chauffeur Service</h1>
                <h2 className='text-2xl font-bold md:font-medium'>Executive rides, professional chauffeurs, and complete comfort—crafted for business and leisure alike.</h2>
              </div>
              <div className='text-2xl'>
                <ul className='flex flex-col gap-5 list-disc pt-4 p-8'>
                  <li><p><b>Professional Chauffeurs</b> – Courteous, experienced, and well-dressed drivers trained to serve business and tourist clients alike.</p></li>
                  <li><p><b>Spacious Vehicles</b> – Travel in comfort with our premium cars, perfect for families, groups, or executive teams.</p></li>
                  <li><p><b>Airport & City Transfers</b> – Timely pickups and smooth travel across Dubai for meetings, hotel transfers, or sightseeing.</p></li>
                  <li><p><b>Tourist-Friendly Service</b> – Explore Dubai landmarks with drivers familiar with key attractions and flexible itineraries.</p></li>
                  <li><p><b>Hourly & Full-Day Bookings</b> – Choose flexible ride options to match your schedule and convenience.</p></li>
                  <li><p><b>Real-Time Support</b> – Our team is available 24/7 for quick assistance, adjustments, or special requests.</p></li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
      <Footer/>
    </>
  )
}

export default ChaufferService
