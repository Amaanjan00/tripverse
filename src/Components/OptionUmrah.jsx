import React from 'react'
import dubai from '../assets/dubai.png'
import ButtonS from '../Constants/ButtonS.jsx'
import arrow from '../assets/icons/rightarrow.png'

function OptionUmrah() {

    const options = [
        {
            offer: "Bronze",
            description: [
                {key: 1, item: "abcdads"},
                {key: 2, item: "abcdads"},
                {key: 3, item: "abcdads"}
            ],
            price: "AED 1999/-"
        },
        {
            offer: "Silver",
            description: [
                {key: 1, item: "abcdads"},
                {key: 2, item: "abcdads"},
                {key: 3, item: "abcdads"}
            ],
            price: "AED 1999/-"
        },
        {
            offer: "Gold",
            description: [
                {key: 1, item: "abcdads"},
                {key: 2, item: "abcdads"},
                {key: 3, item: "abcdads"}
            ],
            price: "AED 1999/-"
        },
        {
            offer: "Gold",
            description: [
                {key: 1, item: "abcdads"},
                {key: 2, item: "abcdads"},
                {key: 3, item: "abcdads"}
            ],
            price: "AED 1999/-"
        },
        {
            offer: "Gold",
            description: [
                {key: 1, item: "abcdads"},
                {key: 2, item: "abcdads"},
                {key: 3, item: "abcdads"}
            ],
            price: "AED 1999/-"
        },

    ]

  return (
    <>
    <div className='flex gap-6 flex-nowrap bg-amber-400/30 px-10 py-5 overflow-x-scroll m-4 sm:mx-20 rounded-4xl'>
    
            {options.map((option, index) => (
                <div className='inline-flex flex-col gap-5 rounded-3xl min-w-[70vw] sm:min-w-[20vw] py-4 px-4 bg-white text-center' key={index}>
                    <img className='w-[100%] h-50 rounded-2xl object-cover' src={dubai} alt="" />
                    <h1>{option.offer}</h1>
                    <ol>
                        {option.description.map((desc, index) => (
                            <li key={index}>{desc.item}</li>
                        ))}
                    </ol>
                    <p>{option.price}</p>
                    <ButtonS button="View Details"/>
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

export default OptionUmrah
