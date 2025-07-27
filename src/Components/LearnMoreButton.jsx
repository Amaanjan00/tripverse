import React from 'react'

function LearnMoreButton() {

    const handleClick = () => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})};

  return (
    <>
        <div onClick={handleClick} className='bg-[#e09900] hover:bg-amber-700 transition-all duration-300 w-fit px-4 py-2 rounded-2xl font-bold text-white cursor-pointer'>
            <button className='cursor-pointer'>Learn more</button>
        </div>
    </>
  )
}

export default LearnMoreButton
