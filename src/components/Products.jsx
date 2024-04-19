import productImg from "../assets/icons/product.png";
import b1 from "../assets/icons/company1.png";
import b2 from "../assets/icons/company2.png";
import b3 from "../assets/icons/company1.png";
import b4 from "../assets/icons/company4.png";
import b5 from "../assets/icons/company5.png";
import b6 from "../assets/icons/company6.png";
import b7 from "../assets/icons/company7.png";

import services from '/3.png'

const Products = () => {

    return (
        <div>
            {/* about text */}
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

            {/* company state */}

            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/3">
                        <img src={services} alt=""/>
                    </div>
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

                </div>
            </div>
        </div>
    );
}

export default Products;