import React from 'react'
import dubai from '../assets/dubai.png'

function Cupons() {

    const cupons = [
        {
            title: "Flat 20% off",
            description: "Get flat 20% on Umrah Packages",
            code: "UMRAH00"
        },
        {
            title: "Flat 20% off",
            description: "Get flat 20% on Umrah Packages",
            code: "UMRAH00"
        },
        {
            title: "Flat 20% off",
            description: "Get flat 20% on Umrah Packages",
            code: "UMRAH00"
        },
        {
            title: "Flat 20% off",
            description: "Get flat 20% on Umrah Packages",
            code: "UMRAH00"
        },
        {
            title: "Flat 20% off",
            description: "Get flat 20% on Umrah Packages",
            code: "UMRAH00"
        },
    ]

  return (
    <>
    <div className='sm:m-10 sm:me-20 sm:ms-20 m-10 overflow-x-scroll'>

        <div className='flex flex-row gap-4 min-w-[100vw] overflow-y-auto bg-amber-200 p-5 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
        
            {cupons.map((cupon, index) => (
                <div className='flex relative flex-col min-w-[250px] gap-3 rounded-2xl overflow-clip shadow-[0_8px_30px_rgb(0,0,0,0.12)]' key={index}>
                    <div className='text-white bg-amber-500 font-bold p-4 flex flex-col gap-2'>
                        <img className='rounded-2xl' src={dubai} alt="" />
                        <h1>{cupon.title}</h1>
                        <h2>{cupon.code}</h2>
                        <p className='text-[12px]'>{cupon.description}</p>
                </div>
            </div>
            ))}

        </div>
    </div>
    </>
  )
}

export default Cupons
