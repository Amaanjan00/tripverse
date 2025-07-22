import React from 'react'
import umrah from '../Home/assets/umrahbanner.png'
import dubai from '../Home/assets/dubaibanner.png'
import { Link } from 'react-router'

function LandscapeBanner() {
  return (
    <>
      <div className='p-5 lg:p-10 w-full h-fit'>
        <div className='flex flex-col lg:flex-row w-full justify-between gap-5 lg:gap-15 rounded-2xl'>
          <div className='w-full hover:scale-102 transition-all duration-600'><Link to="/umrahpackage"><img className='rounded-2xl shadow-2xl' src={umrah} alt="" /></Link></div>
          <div className='w-full hover:scale-102 transition-all duration-600'><Link to="/dubaipackage"><img className='rounded-2xl shadow-2xl' src={dubai} alt="" /></Link></div>
        </div>
      </div>
    </>
  )
}

export default LandscapeBanner
