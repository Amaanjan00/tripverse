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
        {
            title: "Flat 20% off",
            description: "Get flat 20% on Umrah Packages",
            code: "UMRAH00"
        }
    ]

  return (
    <>
    <div className='flex gap-10 flex-nowrap overflow-x-scroll sm:mx-20 h-auto mx-10 my-4 p-5'>

        {cupons.map((cupon, index) => (
            <div className='inline-flex flex-col min-w-60 min-h-70 h-auto rounded-4xl bg-amber-400/10 relative' key={index}>
                <div className='bg-blue-300/65 z-999 w-[100%] h-[100%] absolute rounded-4xl'></div>
                <img className='w-[100%] h-[100%] absolute object-cover rounded-4xl' src={dubai} alt="" />
                <div className='p-5 z-9999 font-bold text-2xl h-[100%] justify-evenly gap-5 flex text-white felx flex-col'>
                    <h2 className='text-5xl'>{cupon.title}</h2>
                    <p>{cupon.description}</p>
                </div>
            </div>
        ))}

    </div>
    </>
  )
}

export default Cupons
