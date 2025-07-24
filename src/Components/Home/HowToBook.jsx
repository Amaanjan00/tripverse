import React from 'react'
import search from '../Home/assets/1.svg'
import sendinquiry from '../Home/assets/2.svg'
import choosemethod from '../Home/assets/3.svg'
import callback from '../Home/assets/4.svg'
import enterdetails from '../Home/assets/enterdetails.png'

function HowToBook() {
  return (
    <div>
      <div className='lg:px-25 lg:py-10 p-5 w-full h-fit'>

        <div className='pb-10 text-3xl font-extrabold text-center'>
          <h1>How to Book?</h1>
        </div>

        <div className='lg:px-10 bg-amber-600 lg:rounded-tl-[7rem] lg:rounded-br-[7rem] lg:rounded-[0] rounded-4xl'>

          <div className='flex text-center md:flex-row justify-evenly items-center flex-col gap-10 px-10'>

            <div className='p-5 items-center justify-between uppercase text-white font-extrabold flex flex-col'>
              <img className='w-fit h-fit min-h-50 scale-55' src={search} alt="" />
              <h1 className='min-h-15'>Find the package you want to inquire about</h1>
            </div>

            <div className='p-5 items-center h-80 justify-between uppercase text-white font-extrabold flex flex-col'>
              <img className='w-fit h-fit min-h-50 scale-75' src={sendinquiry} alt="" />
              <h1 className='min-h-15'>Click on the <br /> 'Inquire Now' button</h1>
            </div>

            <div className='p-5 items-center h-80 justify-between uppercase text-white font-extrabold flex flex-col'>
              <img className='w-fit h-fit min-h-50 scale-65' src={choosemethod} alt="" />
              <h1 className='min-h-15'>Select inquiry method - (Email/WhatsApp)</h1>
            </div>

            <div className='p-5 items-center h-80 justify-between uppercase text-white font-extrabold flex flex-col'>
              <img className='w-fit h-fit min-h-50 scale-55' src={enterdetails} alt="" />
              <h1 className='min-h-15'>Enter your required details and needs</h1>
            </div>

            <div className='p-5 items-center h-80 justify-between uppercase text-white font-extrabold flex flex-col'>
              <img className='w-fit h-fit min-h-50 scale-55' src={callback} alt="" />
              <h1 className='min-h-15'>Within 2 Business Days we will contact you!</h1>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default HowToBook
