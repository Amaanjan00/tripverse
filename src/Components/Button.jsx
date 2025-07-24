import React, { useState } from 'react'
import { Link } from 'react-router'
import whatsapp from '../assets/whatsappicon.png'
import email from '../assets/emailicon.png'

function Button() {

  const [pop, SetPop] = useState(false)

  return (
    <>
      <div className='bg-[#e09900] w-fit px-4 py-2 rounded-2xl font-bold text-white cursor-pointer'>
        <button onClick={() => SetPop(true)} className='cursor-pointer'>Inquire Now</button>
      </div>

      {
        pop &&

        <div onClick={() => SetPop(false)} className='bg-transparent backdrop-blur-2xl h-full w-full fixed top-0 left-0 z-999999 flex justify-center items-center'>

          <div className='h-70 w-80 flex flex-col gap-10 justify-center items-start font-extrabold p-5 text-left'>

            <a href="https://wa.me/message/SMEYWM2EEXHVM1" className='min-w-full'>
              <div className='flex bg-green-500 px-4 justify-start gap-5 items-center py-2 shadow-2xl rounded-full'>
                <img className='h-10 w-10' src={whatsapp} alt="" />
                <h1 className='text-white'>Inquire Via Whatsapp</h1>
              </div>
            </a>

            <a href="mailto:inquiry.tripverse@gmail.com?subject=Travel%20Inquiry%20-%20Dubai%2FUmrah%20-%20%5BYour%20Name%5D&body=Hi%20Tripverse%20Team%2C%0D%0A%0D%0AName%20%3A%20%0D%0APhone%2FWhatsApp%20number%20%3A%20%0D%0ACountry%20%3A%20%0D%0AFrom%20City%20%3A%20%0D%0ADestination%20(Dubai%20%2F%20Umrah)%20%3A%20%0D%0ATravel%20Date%20%3A%20%0D%0ANumber%20of%20adults%20%3A%20%0D%0ANumber%20of%20children%20(Below%204%20years)%20%3A%20%0D%0AHotel%20Type%20(3*%20%2F%204*%20%2F%205*)%20%3A%20%0D%0ANeed%20Visa%20Help%20(Yes%2FNo)%20%3A%20%0D%0AOther%20requirements%20%3A%20%0D%0A%0D%0AThanks!%0D%0A" className='min-w-full'>
              <div className='flex bg-red-500 px-4 justify-start gap-5 items-center py-2 shadow-2xl rounded-full'>
                <img className='h-10 w-10' src={email} alt="" />
                <h1 className='text-white'>Inquire Via Email</h1>
              </div>
            </a>

          </div>

        </div>
      }
    </>
  )
}

export default Button
