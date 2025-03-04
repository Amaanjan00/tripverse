import React from 'react'

function ButtonS(props) {
  return (
    <>
    <button className='w-full bg-amber-500 p-2 pe-4 ps-4 text-[12px] rounded-4xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] text-white'>{props.button}</button>
    </>
  )
}

export default ButtonS
