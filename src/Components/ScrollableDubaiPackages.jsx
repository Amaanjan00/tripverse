import React from 'react'
import { Link } from 'react-router'
import Button from './Button'

function DubaiPackages() {

    const packages = [
        {
            image: "abc",
            packagename: "Dubai Package",
            shortdescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim, cum soluta delectus repellat ut non corrupti, culpa placeat recusandae voluptate cupiditate expedita deleniti dolore laborum id odio quia corporis.",
            price: "1000"
        },
        {
            image: "http://drive.google.com/thumbnail?id=1MqTQw5WoBgP2kHDfG9Kp8ARPxan1DkDe&sz=s1000",
            packagename: "Dubai Package",
            shortdescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus incidunt iure, rerum beatae, quibusdam culpa amet cum porro nemo dolore ipsam cupiditate non, voluptate enim. Minima doloribus sed repellat?",
            price: "1000"
        },
        {
            image: "abc",
            packagename: "Dubai Package",
            shortdescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus incidunt iure, rerum beatae, quibusdam culpa amet cum porro nemo dolore ipsam cupiditate non, voluptate enim. Minima doloribus sed repellat?",
            price: "1000"
        },
        {
            image: "abc",
            packagename: "Dubai Package",
            shortdescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus incidunt iure, rerum beatae, quibusdam culpa amet cum porro nemo dolore ipsam cupiditate non, voluptate enim. Minima doloribus sed repellat?",
            price: "1000"
        },
        {
            image: "abc",
            packagename: "Dubai Package",
            shortdescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus incidunt iure, rerum beatae, quibusdam culpa amet cum porro nemo dolore ipsam cupiditate non, voluptate enim. Minima doloribus sed repellat?",
            price: "1000"
        },
        {
            image: "abc",
            packagename: "Dubai Package",
            shortdescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus incidunt iure, rerum beatae, quibusdam culpa amet cum porro nemo dolore ipsam cupiditate non, voluptate enim. Minima doloribus sed repellat?",
            price: "1000"
        }
    ]

  return (
    <>
      <div className='px-0 py-5 mt-2 flex flex-col gap-2 md:pl-10'>

        <div className='px-5 md:px-10 flex flex-col w-fit gap-2'>
            <h1 className='uppercase text-2xl font-extrabold text-black'>Dubai Packages</h1>
            <div className='h-1 w-[70%] bg-amber-500 rounded-4xl'></div>
        </div>

        <div className='flex gap-6 overflow-x-auto pb-15 pt-7 px-5 snap-x snap-mandatory scrollbar-hide md:pl-10'>

            {packages.map((p, index)=>(
                <div key={index} className='flex text-[14px] flex-col shrink-0 shadow-2xl w-[20rem] overflow-clip'>

                    <img className='h-[15rem] w-full rounded-t-2xl hover:scale-110 transition-all duration-1000' src={p.image} loading='lazy' alt="" />
                    <div className='h-fit'>
                        <h1 className='pt-5 px-5 pb-2 font-bold'>{p.packagename}</h1>
                        <div className='px-5 bg-white flex flex-col truncate text-wrap h-25 max-w-fit gap-4'>
                            <p>{p.shortdescription}</p>
                        </div>
                        <div className='px-5 pb-5 pt-3 flex flex-col gap-3'>
                            <p className='font-bold text-green-500'>AED {p.price}/-</p>
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

export default DubaiPackages
