import { Carousel } from 'flowbite-react';
import banner from "../assets/banner.png";
import banner1 from '/5.png'
import banner2 from '/3.png'
import banner3 from '/8.png'

const Home = () => {
    return (
        <div className="bg-neutralSilver" id='home'>
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
                            <h1 className='text-5xl font-semibold mb-4 text-[#1c3253] md:w-3/4 leading-snug'>Experience <span className='text-[#4880c9]'>Luxury</span> Like Never Before</h1>
                            <p className='text-[#274061] text-base mb-8'>Indulge in luxury and relaxation with Serena Lanka Travels. From exclusive beach resorts to stunning mountain retreats, we offer a range of luxurious accommodations and personalized services to make your vacation truly unforgettable.</p>
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
