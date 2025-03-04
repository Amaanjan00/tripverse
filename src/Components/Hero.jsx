import hero from '../assets/hero.mp4'

function Hero() {
  return (
    <>
    
    <div className='relative '>

        <video className='relative w-[100vw] aspect-video object-cover h-[80vh] brightness-60' src={hero} autoPlay loop muted></video>

        <div className='flex flex-col gap-4 sm:inset-y-70 inset-y-100 inset-x-5 sm:inset-x-30 absolute'>
            <h2 className='text-5xl font-bold text-white'>Travel Far, <br /> Find Yourself</h2>
            <p className='text-2xl text-amber-300 font-bold'>Discover your wanderlust and <br />live your dreams with us</p>
            <button className='w-[50%] sm:w-[10vw] text-white font-medium text-1xl bg-blue-600 rounded-4xl pe-5 ps-5 p-2'>Book Now</button>
        </div>
    </div>

    </>
  )
}

export default Hero
