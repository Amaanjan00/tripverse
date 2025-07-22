import React from 'react'

function DubaiPackages() {
  return (
    <>
      <div className='px-0 py-5 mt-10 flex flex-col gap-7 md:px-20'>

        <div className='px-10 flex flex-col w-fit gap-2'>
            <h1 className='uppercase text-4xl font-extrabold text-black'>Dubai Packages</h1>
            <div className='h-1 w-[70%] bg-amber-500 rounded-4xl'></div>
        </div>

        <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-5'>

            <div className='relative flex shrink-0 ml-5'>
                <img className='h-90 w-70 object-cover rounded-3xl' alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Dubai Package 1</h1>
                    <p className='text-[18px] text-white'>Dubai Package 1</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Dubai Package 1</h1>
                    <p className='text-[18px] text-white'>Dubai Package 1</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Dubai Package 1</h1>
                    <p className='text-[18px] text-white'>Dubai Package 1</p>
                </div>
            </div>

            <div className='relative flex shrink-0'>
                <img className='h-90 w-70 object-cover rounded-3xl' alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Dubai Package 1</h1>
                    <p className='text-[18px] text-white'>Dubai Package 1</p>
                </div>
            </div>

            <div className='relative flex shrink-0 mr-10'>
                <img className='h-90 w-70 object-cover rounded-3xl' alt="" />
                <div className='absolute inset-x-0 bottom-0 p-5 bg-black/50 rounded-b-3xl'>
                    <h1 className='text-4xl font-extrabold text-white'>Dubai Package 1</h1>
                    <p className='text-[18px] text-white'>Dubai Package 1</p>
                </div>
            </div>

        </div>

      </div>
    </>
  )
}

export default DubaiPackages
