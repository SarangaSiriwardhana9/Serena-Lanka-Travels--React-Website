

import { FaUsers } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { GiClubs } from "react-icons/gi";
import { MdPayments } from "react-icons/md";

import aboutImg from "/12.png"
const About = () => {
    return (
        <div>
            {/* about text */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
                <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={aboutImg} alt="" className="w-[600px]" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-[#39629e] font-semibold mb-4 md:w-4/5">
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className="md:w-3/4 text-sm text-[#274061]  mb-8">
                        At Serena Lanka Travels, we are passionate about creating unforgettable travel experiences in Sri Lanka. Founded in 2019, our mission is to showcase the beauty, culture, and hospitality of Sri Lanka to travelers from around the world. With a team of dedicated travel experts and local guides, we strive to provide personalized service and authentic experiences that immerse our guests in the rich tapestry of Sri Lankan life. Whether you're looking for a relaxing beach getaway, a thrilling wildlife safari, or a cultural exploration, we are here to make your dream vacation a reality.
                        </p>
                        

                    </div>
                </div>
            </div>

            {/* company states */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-[#39629e] font-semibold mb-4 md:w-2/3">Our Impressive Stats
                            <br />
                            
                        </h2>
                        <p >Discover the Numbers Behind Serena Lanka Travels' Success</p>

                    </div>

                    {/* states */}
              <div className="md:w-1/2  mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 ">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <FaUsers className="text-5xl text-[#39629e]"/>
                        <div>
                            <h4 className="text-2xl text-[#1c3253] font-semibold">
                            2854
                            </h4>
                            <p className="text-[#1c3253] ">Members</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MdLibraryBooks className="text-5xl text-[#39629e]" />
                        <div>
                            <h4 className="text-2xl text-[#1c3253]  font-semibold">
                            500+
                            </h4>
                            <p className="text-[#1c3253]">Event Bookings</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
   
                    <div className="flex items-center gap-4">
                        <GiClubs className="text-5xl text-[#39629e]" />
                        <div>
                            <h4 className="text-2xl text-[#1c3253]  font-semibold">
                            138
                            </h4>
                            <p className="text-[#1c3253]">Clubs </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MdPayments className="text-5xl text-[#39629e]" />
                        <div>
                            <h4 className="text-2xl text-[#1c3253]  font-semibold">
                            500+
                            </h4>
                            <p className="text-[#1c3253]">Payments</p>
                        </div>
                    </div>
                </div>
              </div>
                </div>
            </div>
        </div>
    );
}

export default About;