

import services from '/3.png'
import company from '/logo2.png'

const OurServices = () => {

    return (
        <div>
            {/* Our Services   */}
            <div className="px-4 lg:px-20 max-w-screen-2xl mx-auto my-8" id="product">
                <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
                    <div className="justify-center items-center">
                        <img src={services} alt="" className="w-[450px]  " />
                    </div>
                    <div className="md:w-2/5 mx-auto items-center justify-center">
                        <h2 className="text-4xl text-[#39629e] font-semibold mb-4 md:w-4/5">
                        Our Services                       </h2>
                        <p className="md:w-full text-md text-[#274061] mb-8">
                        At Serena Lanka Travels, we offer a comprehensive range of services to ensure your travel experience is seamless and memorable. From comfortable transportation to luxurious accommodations and knowledgeable tour guides, we take care of every detail so you can relax and enjoy your journey. Whether you're exploring the vibrant cities, relaxing on pristine beaches, or trekking through lush forests, our services are designed to enhance your travel experience and create unforgettable memories in Sri Lanka.
                        </p>
                        

                    </div>
                </div>
            </div>

          
        </div>
    );
}

export default OurServices;