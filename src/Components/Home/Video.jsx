import video from './assets/dubaivid.mp4'

function Video() {
  return (
    <>
      <div className='relative h-[80vh] w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={video}></video>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-700/90'></div>
        <div className='absolute text-white bottom-0 inset-x-0 p-10 lg:inset-x-20 lg:bottom-20 text-center items-center flex flex-col gap-5'>
            <h1 className='text-4xl uppercase md:normal-case lg:text-5xl font-extrabold'>Travel Far, Find Yourself</h1>
            <p className='text-[18px] uppercase md:normal-case lg:text-2xl'>Discover your wanderlust and live your dreams with us</p>
            <a href='https://www.google.com' className='bg-[#e09900] rounded-2xl w-fit h-fit py-2 px-4 text-[16px] font-bold cursor-pointer'>Inquire Now</a>
            <a href='https://www.google.com/' className='bg-transparent absolute inset-0 cursor-pointer'></a>
        </div>
      </div>
    </>
  )
}

export default Video
