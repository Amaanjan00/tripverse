import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import video from '../Components/Home/assets/dubaivid.mp4'
import dubai1 from '../assets/dubai.png'
import dubai2 from '../assets/dubai2.png'
import dubai3 from '../assets/dubai3.png'
import Button from '../Components/Button'
import ScrollableDubaiPackages from '../Components/ScrollableDubaiPackages'

function DubaiPackage() {

  const placestovisitindubai = [
    {
      nameofplace: "",
      shortdescription: "",
      image: "abc"
    },
  ]

  const thingstodoindubai = [
    {
      nameofthing: "",
      description: "",
      img: "abc"
    }
  ]

  return (
    <div>
      <Header/>

      {/* Video */}

      <div className='relative h-[70vh] w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={video}></video>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-700/90'></div>
        <div className='absolute text-start lg:text-center text-white bottom-10 inset-x-0 px-10 lg:px-0 lg:inset-x-20 lg:bottom-10 items-start lg:items-center flex flex-col gap-5'>
          <h1 className='text-2xl uppercase md:normal-case lg:text-5xl font-extrabold'>From Souks to Skyscrapers! <br /> Explore Dubai Your Way</h1>
          <p className='text-[14px] px-0 lg:px-0 uppercase md:normal-case lg:text-2xl'>Tailor-made packages with the best deals on sightseeing, desert safaris, and city experiences.</p>
          <Button/>
        </div>
      </div>

      {/* Places to visit in dubai */}

      <div>
        <div className='px-0 py-5 mt-5 flex flex-col gap-7 md:px-20'>
      
        <div className='px-10'>
            <h1 className='uppercase text-3xl font-bold text-yellow-500'>Places to visit in dubai</h1>
        </div>

        <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-5'>

            {placestovisitindubai.map((p, index) => (
              <div key={index} className='relative flex shrink-0 ml-5'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={p.image} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>{p.nameofplace}</h1>
                    <p className='text-[14px] text-white'>{p.shortdescription}</p>
                </div>
              </div>
            ))}

        </div>

      </div>
      </div>

      {/* Things to do in dubai */}

      <div>
        <div className='px-0 py-5 mt-10 flex flex-col gap-7 md:px-20'>

        <div className='px-10'>
            <h1 className='uppercase text-3xl font-bold text-yellow-500'>Things to do in dubai</h1>
        </div>

        <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-5'>

            {thingstodoindubai.map((t, index) => (
              <div key={index} className='relative flex shrink-0 ml-5'>
                <img className='h-90 w-70 object-cover rounded-3xl' src={t.img} alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-2xl font-extrabold text-white'>{t.nameofthing}</h1>
                    <p className='text-[14px] text-white'>{t.description}</p>
                </div>
              </div>
            ))}

        </div>

      </div>
      </div>

      {/* Package Details */}

      <div>
        <div className='flex flex-col lg:flex-row pt-10 bg-gray-800 md:p-14 justify-center items-center'>

        <div className='md:hidden px-10'>
            <h1 className='text-3xl text-left md:text-center text-yellow-500 font-bold uppercase'>Best in class Dubai packages</h1>
        </div>

        <div className='grid grid-cols-2 p-8 gap-4'>
            <img className='h-70 object-cover rounded-2xl shadow-2xl' src={dubai1} alt="" />
            <img className='h-70 object-cover rounded-2xl shadow-2xl' src={dubai2} alt="" />
            <div className='col-span-2 px-4 py-2 flex justify-center items-center'>
                <img className='h-70 object-cover shadow-2xl rounded-2xl' src={dubai3} alt="" />
            </div>
        </div>

        <div className='p-6 px-10 flex flex-col gap-4 text-yellow-500'>
            <div className='flex flex-col gap-4'>
                <h1 className='hidden md:block text-5xl font-bold uppercase'>Best in class Dubai package</h1>
                <h2 className='text-2xl font-bold md:font-medium'>Premium stays, seamless transfers, and unforgettable excursions—all designed for your comfort.</h2>
            </div>
            <div className='text-2xl'>
                <ul className='flex flex-col gap-5 list-disc pt-4 p-8'>
                    <li><p><b>Handpicked Hotels</b> – Stay in vetted 3★ to 5★ properties across prime Dubai locations for comfort and convenience.</p></li>
                    <li><p><b>Seamless Transfers</b> – Airport pickups, city commutes, and desert transfers arranged to keep your journey smooth and stress-free.</p></li>
                    <li><p><b>Curated Excursions</b> – Desert safaris, Burj Khalifa visits, dhow cruises, and more—carefully planned to match your interests.</p></li>
                    <li><p><b>Visa & Documentation Support</b> – Guidance and assistance with UAE visa processing and essential travel documentation.</p></li>
                    <li><p><b>Customizable Itineraries </b> – Mix and match tours, add-ons, and hotel classes to create your perfect Dubai experience.</p></li>
                    <li><p><b>24/7 Local Assistance</b> – Our on-ground team is just a call or WhatsApp away for any help during your trip.</p></li>
                </ul>
            </div>
        </div>

        

      </div>
      </div>

      <ScrollableDubaiPackages/>

      <Footer/>
    </div>
  )
}

export default DubaiPackage
