import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import video from '../assets/umrahvideo.mp4'
import hotel from '../assets/icons/1.png'
import flight from '../assets/icons/2.png'
import visa from '../assets/icons/3.png'
import zamzam from '../assets/icons/4.png'
import food from '../assets/icons/5.png'
import ziyarat from '../assets/icons/6.png'
import transportation from '../assets/icons/7.png'
import umrahkit from '../assets/icons/8.png'
import pic1 from '../assets/umrah1.png'
import pic2 from '../assets/umrah2.png'
import pic3 from '../assets/umrah3.png'
import ScrollableUmrahPackages from '../Components/ScrollableUmrahPackages'
import cavehira from '../assets/cavehira.jpg'
import cavethawr from '../assets/cavethawr.jpg'
import masjidaisha from '../assets/masjidaisha.jpg'
import mina from '../assets/mina.jpg'
import arafat from '../assets/arafat.jpg'
import masjidnabawi from '../assets/umrah2.png'
import baqi from '../assets/baqi.jpg'
import masjidquba from '../assets/masjidquba.jpg'
import uhud from '../assets/uhud.jpg'
import Button from '../Components/Button'

function UmrahPackage() {
  return (
    <div>
      <Header/>

      {/* Video */}

      <div className='relative h-[70vh] w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={video}></video>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-700/90'></div>
        <div className='absolute text-start lg:text-center text-white bottom-10 inset-x-0 px-10 lg:px-0 lg:inset-x-20 lg:bottom-10 items-start lg:items-center flex flex-col gap-5'>
          <h1 className='text-2xl uppercase md:normal-case lg:text-5xl font-extrabold'>Embark on a blessed Umrah journey with comfort, convenience, and spiritual fulfillment.</h1>
          <p className='text-[14px] px-0 lg:px-0 uppercase md:normal-case lg:text-2xl'>Seamless Umrah experience with premium services and guided support.</p>
          <Button/>
          <a href='https://wa.me/message/SMEYWM2EEXHVM1' className='bg-transparent absolute inset-0 cursor-pointer'></a>
        </div>
      </div>

      {/* Package Includes */}

      <div>
        <div>
        <div className='flex flex-col font-bold mt-5 md:mt-12 md:mb-10 w-full text-gray-600'>

            <div className='p-2 text-center'>
                <h1 className='text-3xl uppercase lg:text-5xl'>Package Includes</h1>
            </div>

            <div className='hidden md:inline-grid md:grid-cols-2 lg:grid-cols-4 lg:px-30 gap-5 items-center justify-center font-bold text-[18px]'>
                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={hotel} alt="" />
                    <h1 className='text-2xl uppercase'>Hotel</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={flight} alt="" />
                    <h1 className='text-2xl uppercase'>Flight</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={visa} alt="" />
                    <h1 className='text-2xl uppercase'>Visa</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={zamzam} alt="" />
                    <h1 className='text-2xl uppercase'>Zam Zam</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={food} alt="" />
                    <h1 className='text-2xl uppercase'>Food</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={ziyarat} alt="" />
                    <h1 className='text-2xl uppercase'>Ziyarat</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={transportation} alt="" />
                    <h1 className='text-2xl uppercase'>Transportation</h1>
                </div>

                <div className='md:p-10 text-center w-100 h-100 md:w-full md:h-full p-10 lg:p-0'>
                    <img className='p-5' src={umrahkit} alt="" />
                    <h1 className='text-2xl uppercase'>Umrah Kit</h1>
                </div>
            </div>

        </div>
      </div>

      <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden ml-8 mb-8 pt-8">

            <div className="min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4">
                <img className='h-70 w-70 object-contain p-5 py-0' src={hotel} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Hotel</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={flight} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Flight</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={visa} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Visa</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={zamzam} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Zam Zam</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={food} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Food</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={ziyarat} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Ziyarat</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={transportation} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Transportation</h1>
            </div>

            <div className='min-w-[50%] min-h-70 snap-start flex flex-col flex-shrink-0 items-center justify-center rounded-lg overflow-hidden border-yellow-500 border-4'>
                <img className='h-70 w-70 object-contain p-5 py-0' src={umrahkit} alt="" />
                <h1 className='text-2xl text-gray-600 font-bold text-center uppercase'>Umrah Kit</h1>
            </div>
      </div>
      </div>

      {/* Package Details */}

      <div>
        <div className='flex flex-col lg:flex-row mt-5 pt-10 bg-gray-800 md:p-14 justify-center items-center'>

        <div className='md:hidden px-10'>
            <h1 className='text-5xl text-center text-yellow-500 font-bold uppercase'>Best in class Umrah package</h1>
        </div>

        <div className='grid grid-cols-2 p-8 gap-4'>
            <img className='h-70 object-cover rounded-2xl shadow-2xl' src={pic1} alt="" />
            <img className='h-70 object-cover rounded-2xl shadow-2xl' src={pic2} alt="" />
            <div className='col-span-2 px-4 py-2 flex justify-center items-center'>
                <img className='h-70 object-cover shadow-2xl rounded-2xl' src={pic3} alt="" />
            </div>
        </div>

        <div className='p-6 px-10 flex flex-col gap-4 text-yellow-500'>
            <div className='flex flex-col gap-4'>
                <h1 className='hidden md:block text-5xl font-bold uppercase'>Best in class Umrah package</h1>
                <h2 className='text-3xl font-bold md:font-medium'>Experience a Blessed Journey to Makkah & Madinah</h2>
            </div>
            <div className='text-2xl'>
                <ul className='flex flex-col gap-2 list-disc pt-4 p-8'>
                    <li><p><b>Premium Accommodation</b> – Stay in top-rated hotels near Masjid al-Haram & Masjid an-Nabawi.</p></li>
                    <li><p><b>Visa Assistance</b> – Hassle-free Umrah visa processing.</p></li>
                    <li><p><b>Comfortable Transport</b> – Private airport transfers & intercity travel between Makkah & Madinah.</p></li>
                    <li><p><b>Ziyarah Tours</b> – Guided visits to historical Islamic sites in both cities.</p></li>
                    <li><p><b>(Optional) Meals Included</b> – Daily breakfast with optional full-board meal plans.</p></li>
                    <li><p><b>24/7 Assistance</b> – Dedicated support for a seamless experience.</p></li>
                </ul>
            </div>
        </div>

        

      </div>
      </div>

      {/* Madinah Ziyahrat */}

      <div>
        <div className='px-0 py-5 mt-5 flex flex-col gap-7 md:px-20'>
      
        <div className='px-10'>
            <h1 className='uppercase text-3xl font-bold text-yellow-500'>Ziyarat locations in Madinah</h1>
        </div>

        <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-5'>

            <div className='relative flex shrink-0 ml-5'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={masjidnabawi} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Masjid Nabawi</h1>
                    <p className='text-[14px] text-white'>Prophet Muhammad’s mosque and resting place in Madinah.</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={baqi} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Baqi Cemetery</h1>
                    <p className='text-[14px] text-white'>Historic cemetery housing graves of Prophet’s family, companions.</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={masjidquba} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Masjid Quba</h1>
                    <p className='text-[14px] text-white'>First mosque built in Islam by Prophet Muhammad.</p>
                </div>
            </div>

            <div className='relative flex shrink-0 mr-10'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={uhud} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Uhud Mountain</h1>
                    <p className='text-[14px] text-white'>Site of major battle between Muslims and Quraysh.</p>
                </div>
            </div>

        </div>

      </div>
      </div>

      {/* Makkah Ziyahrat */}

      <div>
        <div className='px-0 py-5 mt-10 flex flex-col gap-7 md:px-20'>

        <div className='px-10'>
            <h1 className='uppercase text-3xl font-bold text-yellow-500'>Ziyarat locations in Makkah</h1>
        </div>

        <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-5'>

            <div className='relative flex shrink-0 ml-5'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={cavehira} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Cave Hira</h1>
                    <p className='text-[14px] text-white'>Where Prophet Muhammad received the first revelation, Quran.</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={cavethawr} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Cave Thawr</h1>
                    <p className='text-[14px] text-white'>Shelter of Prophet Muhammad and Abu Bakr during migration</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={masjidaisha} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Masjid Aisha</h1>
                    <p className='text-[14px] text-white'>Miqat mosque for pilgrims to enter Ihram from Makkah</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={mina} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Mina</h1>
                    <p className='text-[14px] text-white'>Tented city where Hajj pilgrims stay and perform stoning ritual.</p>
                </div>
            </div>

            <div className='relative flex shrink-0 mr-10'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={arafat} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>Arafat</h1>
                    <p className='text-[14px] text-white'>Key Hajj site where pilgrims gather for supplication and prayer.</p>
                </div>
            </div>

        </div>

      </div>
      </div>

      <ScrollableUmrahPackages/>

      <Footer/>
    </div>
  )
}

export default UmrahPackage
