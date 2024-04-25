import b1 from "../assets/icons/company1.png";
import b2 from "../assets/icons/company2.png";
import b3 from "../assets/icons/company1.png";
import b4 from "../assets/icons/company4.png";
import b5 from "../assets/icons/company5.png";
import { TbBulbFilled } from "react-icons/tb";

import { FaHotel } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";

const OurClients = () => {
    const services = [
        {
            id: 1,
            title: "Travel Tips & Tricks",
            description:  "Discover insider tips and tricks to make the most of your travels. From packing hacks to budget-friendly ideas, our blog offers valuable advice for every traveler.",
            icon: <TbBulbFilled />
        },
        {
            id: 2,
            title: "Destination Guides",
            description: "Explore the best destinations in Sri Lanka and beyond with our detailed guides. Learn about the must-visit attractions, hidden gems, and local culture of each place.",
            icon: <FaHotel />
        },
        {
            id: 3,
            title: "Company Updates & News",
            description: "Stay up-to-date with the latest news and updates from Serena Lanka Travels. From new tour packages to special promotions, find out what's happening in the world of travel.",
            icon: <SiGooglenews />
        }
    ];

    return (
        <div id="clients">
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-neutralSilver" >
            <div className="text-center my-8">
                <h2 className="text-4xl text-[#39629e] font-semibold mb-2">Our Clients</h2>
                <p className="text-[#274061]  ">We have been working with some Fortune 500+ clients</p>
                {/* company logo */}
                <div className="my-12 mx-20 flex flex-wrap justify-between items-center gap-8">
                    <img src={b1} alt="" />
                    <img src={b2} alt="" />
                    <img src={b3} alt="" />
                    <img src={b4} alt="" />
                    <img src={b5} alt="" />
                </div>
            </div>
            {/* services card */}
            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-[#39629e] font-semibold mb-2"> Wanderlust Chronicles</h2>
                <p className="text-[#274061] "> Explore, Discover, and Share the Joy of Travel with Serena Lanka Travels </p>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {services.map(service => (
                    <div key={service.id} className="px-4 py-8 text-center  md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer  hover:-translate-y-5 hover:border-b-4 hover:border-[#395a8b]  transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="flex items-center justify-center text-5xl text-[#4774b8] ">
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-[#1c3253] my-2">{service.title}</h4>
                            <p className="text-sm text-[#274061]">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
        );
}

export default OurClients;

