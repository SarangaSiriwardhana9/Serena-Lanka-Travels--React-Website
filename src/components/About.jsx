

import { FaUsers } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { GiClubs } from "react-icons/gi";
import { MdPayments } from "react-icons/md";
import company from '/logo2.png'
import aboutImg from "/12.png"
const About = () => {
    return (
        <div className="bg-neutralSilver">
            {/* about text */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver" id="about">
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
            <div className="px-4 lg:px-28 max-w-screen-2xl md:-mr-20 mx-auto bg-neutralSilver  py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* states */}
                    <div className="md:w-1/2  mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 ">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <FaUsers className="text-5xl text-[#39629e]" />
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
                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-[#39629e] font-semibold mb-4 md:w-2/3">Our Impressive Stats
                            <br />

                        </h2>
                        <p >Discover the Numbers Behind Serena Lanka Travels' Success</p>

                    </div>


                </div>
            </div>

            {/* company state */}

            <div className="px-4 lg:px-36 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-2/3 mx-auto">
                        <div>
                            <h2 className="text-4xl text-[#39629e] font-semibold mb-4 md:w-4/5">
                                Company Statement                      </h2>
                            <p className="md:w-4/5 text-md text-[#274061] mb-8 leading-7">
                                "At Serena Lanka Travels, we are committed to providing exceptional service, promoting sustainable tourism practices, and fostering meaningful connections with our clients and the communities we operate in. Our dedication to excellence, integrity, and responsible tourism guides everything we do, ensuring that every journey with us is not only enjoyable but also contributes positively to the environment and local communities."
                            </p>
                            <h5 className="text-[#5d93da] text-xl font-semibold mb-2">Serena Lanka Travels - </h5>
                            <p className="text-base text-[#274061] mb-8">where every trip is an opportunity to make lasting memories and a positive impact .</p>

                        </div>
                    </div>
                    <div className="md:w-1/3 mx-auto">
                        <img src={company} alt="" className="w-[400px] mx-auto" />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;