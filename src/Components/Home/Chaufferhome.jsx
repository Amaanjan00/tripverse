import { Link } from 'react-router'
import React from 'react'
import Button from '../Button'
import LearnMoreButton from '../LearnMoreButton'

function Chauffeurhome() {

  return (
    <>
      <div className='px-5 md:px-30 flex flex-col gap-8'>
        
        <h1 className='text-5xl md:text-5xl font-extrabold text-black'>From car rentals to chauffer driven car services we have go it all!</h1>

        <div className='flex gap-2 text-3xl w-full flex-wrap'>

          <div className='rounded-2xl p-2 flex gap-2 items-center'>
            <h1 className='font-bold text-green-600 text-5xl'>38</h1>
            <p>Cars</p>
          </div>

          <div className='rounded-2xl p-2 flex gap-2 items-center'>
            <h1 className='font-bold text-green-600 text-5xl'>10</h1>
            <p>Drivers</p>
          </div>

          <div className='rounded-2xl p-2 flex gap-2 items-center'>
            <h1 className='font-bold text-green-600 text-5xl'>#1</h1>
            <p>Service</p>
          </div>

        </div>

        <Link to="/chaufferservice"><LearnMoreButton/></Link>

      </div>
    </>
  )
}

export default Chauffeurhome
