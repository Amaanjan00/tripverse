import dubai from '../assets/dubai.png'
import dubaivid from '../assets/videos/dubaivid.mp4'
import umrahvid from '../assets/videos/umrahvid.mp4'
import dubai2 from '../assets/dubai2.png'
import dubai3 from '../assets/dubai3.png'
import umrah1 from '../assets/umrah1.png'
import umrah2 from '../assets/umrah2.png'
import umrah3 from '../assets/umrah3.png'
import ButtonP from '../Constants/ButtonP'
import OptionDubai from './OptionDubai'
import OptionUmrah from './OptionUmrah'


function Packages() {
  return (
    <>
    <div className='mt-20'>
        <div className='flex flex-col justify-between'>
            <div className='flex'>
                <video className='top-0 object-cover h-full bg-amber-400 z-[-1] opacity-100 shadow-[inset_-12px_-8px_40px_#46464620] rounded-[2rem]' src={dubaivid} autoPlay loop muted></video>
            </div>

            <div className='p-20 flex flex-col gap-5 justify-center w-[50vw]'>
                <h2 className='text-6xl font-bold'>Dubai Tourism Package</h2>
                <h3 className='text-4xl'>Experience the Best of Dubai with Our Exclusive Tour Package</h3>
                <h3>Package Highlights:</h3>
                <p>
                    ✔ Luxury Stay – 5-star hotel with breakfast & top-notch amenities.<br/>
                    ✔ City Tour – Visit Burj Khalifa, Dubai Mall, Al Fahidi District & more.<br/>
                    ✔ Desert Safari – Dune bashing, camel rides, and an Arabian night experience.<br/>
                    ✔ Theme Parks – Entry to IMG Worlds, Dubai Parks, or Aquaventure Waterpark.<br/>
                    ✔ Dhow Cruise – Dinner with skyline views & live entertainment.<br/>
                    ✔ Shopping Tour – Explore Gold Souk, Dubai Mall & luxury outlets.<br/>
                    ✔ Adventure Activities – Jet skiing, skydiving, and scuba diving.<br/>
                </p>

                <ButtonP button="Book Now"/>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

            <div className='p-20 flex flex-col gap-5 justify-center'>
                <h2 className='text-5xl font-bold'>Experience the best of Dubai with luxury, adventure, and unforgettable moments.</h2>
                <h3 className='text-2xl'>From skyscrapers to safaris, explore Dubai like never before.</h3>

                <ButtonP button="Book Now"/>
            </div>

            <div className='flex p-20'>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                    <img className='rounded-3xl aspect-video object-cover col-span-2 h-[30vh] shadow-2xl shadow-blue-500/20' src={dubai} alt="" />
                    <img className='rounded-3xl aspect-square object-cover h-[35vh] shadow-2xl shadow-blue-500/20' src={dubai2} alt="" />
                    <img className='rounded-3xl aspect-square object-cover h-[35vh] shadow-2xl shadow-blue-500/20' src={dubai3} alt="" />
                </div>
            </div>

            
        </div>
        
        <OptionDubai/>

    </div>

    <div>
        <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

            <div className='p-20 flex flex-col gap-5 justify-center'>
                <h2 className='text-6xl font-bold'>Umrah Package</h2>
                <h3 className='text-4xl'>Experience a Blessed Journey to Makkah & Madinah</h3>
                <h3>Package Highlights:</h3>
                <p>
                    ✔ Premium Accommodation – Stay in top-rated hotels near Masjid al-Haram & Masjid an-Nabawi.<br/>
                    ✔ Visa Assistance – Hassle-free Umrah visa processing.<br/>
                    ✔ Comfortable Transport – Private airport transfers & intercity travel between Makkah & Madinah.<br/>
                    ✔ Ziyarah Tours – Guided visits to historical Islamic sites in both cities.<br/>
                    ✔ 24/7 Assistance – Dedicated support for a seamless experience.<br/>
                    ✔ Meals Included – Daily breakfast with optional full-board meal plans.<br/>
                </p>
                
                <ButtonP button="Book Now"/>
            </div>

            <div className='flex relative'>
                <video className='absolute top-0 object-cover h-full bg-amber-400 z-[-1] opacity-100 shadow-[inset_-12px_-8px_40px_#46464620] rounded-bl-[10rem] rounded-tl-[10rem]' src={umrahvid} autoPlay loop muted></video>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>

            <div className='flex p-20'>
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                    <img className='rounded-3xl aspect-video object-cover col-span-2 h-[30vh] shadow-2xl shadow-blue-500/20' src={umrah3} alt="" />
                    <img className='rounded-3xl aspect-square object-cover h-[35vh] shadow-2xl shadow-blue-500/20' src={umrah1} alt="" />
                    <img className='rounded-3xl aspect-square object-cover h-[35vh] shadow-2xl shadow-blue-500/20' src={umrah2} alt="" />
                </div>
            </div>

            <div className='p-20 flex flex-col gap-5 justify-center'>
                <h2 className='text-5xl font-bold'>Embark on a blessed Umrah journey with comfort, convenience, and spiritual fulfillment.</h2>
                <h3 className='text-2xl'> Seamless Umrah experience with premium services and guided support.</h3>

                <ButtonP button="Book Now"/>
            </div>
            
        </div>

        <OptionUmrah/>
    </div>
    </>
  )
}

export default Packages
