import React from 'react'
import { Link } from 'react-router'
import Button from './Button'
import umrahpackage1 from '../assets/umrahpackage1.png'
import umrahpackage2 from '../assets/umrahpackage2.png'
import umrahpackage3 from '../assets/umrahpackage3.png'
import umrahpackage4 from '../assets/umrahpackage4.png'

function UmrahPackages() {

    const packages = [
        {
            img: umrahpackage1,
            packagename: "Umrah Essence 5 | 5 Days / 4 Nights",
            shortdescription: "Visa, private transfers, 3 star hotels, three Makkah nights, one Madinah night, flights excluded, August travel, 24/7 support included.",
            twoprice: "1549",
            threeprice: "1266",
            fourprice: "1250"
        },
        {
            img: umrahpackage2,
            packagename: "Umrah Balance 7 | 7 Days / 6 Nights",
            shortdescription: "Visas included, private transfers, 3 star hotels, four Makkah nights, two Madinah nights, flights excluded, August dates, 24/7 assistance.",
            twoprice: "1789",
            threeprice: "1433",
            fourprice: "1375"
        },
        {
            img: umrahpackage3,
            packagename: "Umrah Classic 10 | 10 Days / 9 Nights",
            shortdescription: "Complete package: visas, transfers, 3 star hotels, six Makkah nights, three Madinah nights, flights excluded, August flexibility, 24/7 help.",
            twoprice: "2069",
            threeprice: "1633",
            fourprice: "1500"
        },
        {
            img: umrahpackage4,
            packagename: "Umrah Devotion 15 | 15 Days / 14 Nights",
            shortdescription: "Extended stay: visas, transfers, 3 star hotels, nine Makkah nights, five Madinah nights, flights excluded, relaxed pace, 24/7 support.",
            twoprice: "2595",
            threeprice: "1966",
            fourprice: "1775"
        },
        
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
                <div key={index} className='flex text-[14px] flex-col shrink-0 shadow-2xl w-[20rem] overflow-clip'>

                    <img className='h-[15rem] w-full rounded-t-2xl hover:scale-110 transition-all duration-1000' src={p.img} loading='lazy' alt="" />
                    <div className='h-fit'>
                        <h1 className='pt-5 px-5 pb-2 font-bold'>{p.packagename}</h1>
                        <div className='px-5 bg-white flex flex-col text-wrap truncate h-25 max-w-fit gap-4'>
                            <p>{p.shortdescription}</p>
                        </div>
                        <div className='px-5 pb-5 pt-3 flex flex-col gap-3'>
                            <p className='font-bold text-green-500'><span className='text-black'>Double Bed -</span> AED {p.twoprice}/person</p>
                            <p className='font-bold text-green-500'><span className='text-black'>Triple Bed -</span> AED {p.threeprice}/person</p>
                            <p className='font-bold text-green-500'><span className='text-black'>Quad Bed -</span> AED {p.fourprice}/person</p>
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
