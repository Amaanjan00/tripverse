import React from 'react'
import { Link } from 'react-router'
import Button from './Button'

function UmrahPackages() {

    const packages = [
        {
            packagename: "Umrah Package",
            shortdescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, officia eius. Cumque ipsa totam aliquam voluptatem? Consequuntur iure minima iste sit error hic, modi, ad explicabo ea est molestiae incidunt?",
            price: "1000"
        },
        {
            packagename: "Package Name",
            shortdescription: "Package Description",
            price: "1000"
        },
        {
            packagename: "Package Name",
            shortdescription: "Package Description",
            price: "1000"
        },
        {
            packagename: "Package Name",
            shortdescription: "Package Description",
            price: "1000"
        },
        {
            packagename: "Package Name",
            shortdescription: "Package Description",
            price: "1000"
        },
        {
            packagename: "Package Name",
            shortdescription: "Package Description loremsafmadkfadskfaskjfaskfaskj",
            price: "1000"
        }
    ]

  return (
    <>
      <div className='px-0 py-5 mt-2 flex flex-col gap-2 md:pl-10'>

        <div className='px-5 md:px-10 flex flex-col w-fit gap-2'>
            <h1 className='uppercase text-2xl font-extrabold text-black'>Umrah Packages</h1>
            <div className='h-1 w-[70%] bg-amber-500 rounded-4xl'></div>
        </div>

        <div className='flex gap-6 overflow-x-auto pb-15 pt-7 px-5 snap-x snap-mandatory scrollbar-hide mb-5 md:pl-10'>

            {packages.map((p, index)=>(
                <div key={index} className='flex flex-col shrink-0 shadow-2xl w-[20rem] overflow-clip'>

                    <img className='h-[20rem] w-full rounded-t-2xl hover:scale-110 transition-all duration-1000' src="https://placehold.co/400x320/png" alt="" />
                    <div className='h-fit'>
                        <h1 className='pt-5 px-5 pb-2 font-bold'>{p.packagename}</h1>
                        <div className='px-5 bg-white flex flex-col text-wrap truncate h-25 max-w-fit gap-4'>
                            <p>{p.shortdescription}</p>
                        </div>
                        <div className='px-5 pb-5 pt-3 flex flex-col gap-3'>
                            <p className='font-bold text-[18px] text-green-500'>AED {p.price}/-</p>
                            <Button/>
                        </div>
                    </div>

                </div>
            ))}

        </div>

      </div>
    </>
  )
}

export default UmrahPackages
