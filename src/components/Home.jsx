import { Carousel } from 'flowbite-react';
import banner from "../assets/banner.png";
import banner1 from '/11.png'
import banner2 from '/10.png'
import banner3 from '/13.png'

const Home = () => {
    return (
        <div className="" id='home'>
            <div className="px-4 lg:px-20 max-w-screen-2xl mx-auto min-h-screen h-screen">

                <Carousel className='w-full mx-auto' >
                    <div className="my-28 md:my-8 py-12 flex  flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner1} alt='' className='w-[600px]' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4  md:w-3/4 leading-snug text-[#1c3253]'>Explore the Serene <span className='text-[#4880c9]'>Beauty</span> of Sri Lanka</h1>
                            <p className='text-[#274061] text-base mb-8'>Discover the lush landscapes, pristine beaches, and rich cultural heritage of Sri Lanka with Serena Lanka Travels. Our expertly crafted tours will take you on a journey through this tropical paradise, offering unforgettable experiences at every turn.</p>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex  flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner2} alt='' className='w-[500px]' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-[#1c3253] md:w-3/4 leading-snug'>Discover the  <span className='text-[#4880c9]'>Rich Heritage</span> of Sri Lanka</h1>
                            <p className='text-[#274061] text-base mb-8'>Immerse yourself in the vibrant culture and traditions of Sri Lanka with Serena Lanka Travels. Experience the warmth of Sri Lankan hospitality, explore ancient temples, and witness traditional ceremonies that have been passed down for generations. Let us take you on a journey to discover the heart and soul of this beautiful island nation.</p>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex  flex-col md:flex-row-reverse items-center justify-between gap-12 ">
                        <div>
                            <img src={banner3} alt='' className='w-[700px]' />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-[#1c3253] md:w-3/4 leading-snug'>Embark on an <span className='text-[#4880c9]'>Adventure </span> of a Lifetime</h1>
                            <p className='text-[#274061] text-base mb-8'>Seeking adventure? Look no further than Serena Lanka Travels. Explore the untamed wilderness, go on thrilling wildlife safaris, and trek through the breathtaking landscapes of Sri Lanka. Get ready for an adventure you'll never forget.</p>
                        </div>
                    </div>
                </Carousel>

            </div>
        </div>
    );
}

export default Home;
