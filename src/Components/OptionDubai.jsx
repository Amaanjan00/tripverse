import React from 'react'
import dubai from '../assets/dubai.png'
import ButtonS from '../Constants/ButtonS.jsx'
import arrow from '../assets/icons/rightarrow.png'

function OptionDubai() {

    const options = [
        {
            offer: "Basic",
            description: [
                {item: "abcdads"},
                {item: "abcdads"},
                {item: "abcdads"}
            ],
            price: "AED 1999/-"
        },
        {
            offer: "Premium",
            description: [
                {item: "abcdads"},
                {item: "abcdads"},
                {item: "abcdads"}
            ],
            price: "AED 1999/-"
        },
        {
            offer: "ABCD",
            description: [
                {item: "abcdads"},
                {item: "abcdads"},
                {item: "abcdads"}
            ],
            price: "AED 1999/-"
        },

    ]

  return (
    <>
    <div className='bg-amber-200 flex p-5 m-5 sm:flex sm:justify-evenly sm:m-20 sm:h-fit rounded-4xl overflow-x-scroll shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-5'>

        {options.map((option, index) => (
            <div className='bg-white rounded-2xl p-5 min-w-full sm:min-w-10 sm:min-h-fit sm:flex sm:flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)]' key={index}>
                <img className='rounded-2xl sm:w-100' src={dubai} alt="" />
                <div className='flex flex-col justify-items-center text-center gap-3 items-center'>
                    <h2 className='text-4xl font-bold'>{option.offer}</h2>
                    <ol>
                        {option.description.map((items, index) => (
                            <li key={index}>{items.item}</li>
                        )
                        )}
                    </ol>
                    <h2 className='text-2xl font-bold'>{option.price}</h2>
                    <ButtonS button="Book Now"/>
                </div>
            </div>
        ))}

    </div>
    <div className='h-10 flex items-center gap-10 justify-end pe-10 sm:hidden'>
        <h1 className='text-2xl font-bold'>Scroll</h1>
        <img className='object-cover h-full' src={arrow} alt="" />  
    </div>
    </>
  )
}

export default OptionDubai
