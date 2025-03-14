import React, { useState } from 'react'
import dubai from '../assets/dubai.png'
import ButtonS from '../Constants/ButtonS.jsx'
import arrow from '../assets/icons/rightarrow.png'
import { href } from 'react-router'

function OptionDubai() {
    
    const options = [
        {
            offer: "Dubai Starter Package",
            description: [
                {item: "Luxury Stay"},
                {item: "Desert Safari & Dhow Cruise"},
                {item: "City Tour & Iconic Attractions"},
                {item: "Burj Khalifa & More!"},
            ],
            price: "Rs. 80,999/-",
            image: "https://res.cloudinary.com/dubsv9e9x/image/upload/v1741865826/WhatsApp_Image_2025-03-13_at_16.44.50_9338ed1c_mnwt2x.jpg",
        },
        {
            offer: "Dubai Silver Package",
            description: [
                {item: "Luxury Accommodation"},
                {item: "City Tour & Iconic Attractions"},
                {item: "Desert Safari with BBQ Dinner"},
                {item: "Dhow Cruise with Entertainment"},
                {item: "Burj Khalifa Visit & More!"}
            ],
            price: "Rs. 90,999/-",
            image: "https://res.cloudinary.com/dubsv9e9x/image/upload/v1741865719/WhatsApp_Image_2025-03-13_at_16.59.28_8162ea7a_m9zxw1.jpg",
        },
        {
            offer: "Dubai Gold Package",
            description: [
                {item: "Luxury Stay"},
                {item: "Private Desert Safari & Dhow Cruise"},
                {item: "VIP City Tour & Iconic Attractions"},
                {item: "Burj Khalifa VIP Experience & More!"},
            ],
            price: "AED 1999/-",
            image: "https://res.cloudinary.com/dubsv9e9x/image/upload/v1741865719/WhatsApp_Image_2025-03-13_at_16.59.28_8162ea7a_m9zxw1.jpg"
        },
        {
            offer: "Dubai Platinum Package",
            description: [
                {item: "Ultra-Luxury Stay"},
                {item: "Exclusive Desert Safari & Yacht Cruise"},
                {item: "Helicopter Tour & Iconic Attractions"},
                {item: "Burj Al Arab Experience & More!"}
            ],
            price: "AED 1999/-",
            image: "https://res.cloudinary.com/dubsv9e9x/image/upload/v1741865719/WhatsApp_Image_2025-03-13_at_16.59.28_8162ea7a_m9zxw1.jpg"
        },
        {
            offer: "Dubai Honeymoon Package",
            description: [
                {item: "Romantic Luxury Stay"},
                {item: "Private Desert Safari & Dinner Cruise"},
                {item: "Couple Spa & Iconic Attractions"},
                {item: "Burj Khalifa & Candlelight Dinner"}
            ],
            price: "AED 1999/-",
            image: "https://res.cloudinary.com/dubsv9e9x/image/upload/v1741865719/WhatsApp_Image_2025-03-13_at_16.59.28_8162ea7a_m9zxw1.jpg"
        },
        
    ]
    
    return (
        <>

    <div className='flex gap-6 flex-nowrap bg-amber-400/30 px-10 py-5 overflow-x-scroll m-4 sm:mx-20 rounded-4xl'>

        {options.map((option, index) => (
            <div className='inline-flex justify-between flex-col gap-5 rounded-3xl min-w-[70vw] sm:min-w-[20vw] py-4 px-4 bg-white text-center' key={index}>
                <div className='flex flex-col gap-5'>
                    <img className='w-[100%] h-50 rounded-2xl object-cover' src={option.image} alt="" />
                    <h1 className='font-bold text-2xl'>{option.offer}</h1>
                </div>
                <ol className='text-left flex justify-center flex-col list-disc px-10'>
                    {option.description.map((desc, index) => (
                        <li key={index}>{desc.item}</li>
                    ))}
                </ol>
                <p className='font-bold'>{option.price}</p>
                <div className='flex gap-2'>
                    <ButtonS button="View Details" />
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
