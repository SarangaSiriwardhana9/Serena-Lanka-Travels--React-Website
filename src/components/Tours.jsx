import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tour1 from '/tour1.jpg'
import tour2 from '/tour2.jpg'
import tour3 from '/tour3.jpg'
import tour4 from '/tour4.jpg'
import tour5 from '/tour5.jpg'
import tour6 from '/tour6.jpg'
import tour7 from '/tour7.jpg'
import tour8 from '/tour8.jpg'

import { GrNext, GrPrevious } from "react-icons/gr";

const Tours = () => {
    const blogs = [
        { id: 1, title: "CULTURAL TRIANGLE", place:"Tooth Temple in Kandy", image: tour1 },
        { id: 2, title: "CENTRAL HIGHLANDS", place:"St. Clair's Falls in Dimbula tea region" ,image: tour2 },
        { id: 3, title: "WESTERN PLAINS", place:"Yapahuwa in Kurunegala District" ,image: tour3 },
        { id: 4, title: "SOUTHWESTERN WET ZONE",place:"Bentota Beach in Galle District", image: tour4 },
        { id: 5, title: "DEEP SOUTH",place:"Lighthouse in Galle", image: tour5 },
        { id: 6, title: "EAST COAST",place:"Pottuvil Dunes at Arugam Bay", image: tour6 },
        { id: 7, title: "NORTHERN PROVINCE",place:"Kandaswamy Kovil in Nallur", image: tour7 },
        { id: 8, title: "SOUTHWESTERN WET ZONE",place:"Bopath waterfalls near Kuruwita", image: tour8 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3, // Number of slides to show initially
        responsive: [
            {
                breakpoint: 1024, // Medium screens and above
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, // Small screens
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480, // Extra small screens
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    

    const sliderRef = React.useRef(null);

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 bg-neutralSilver" id="tours">
            <div className="text-center md:w-1/2 mx-auto">
                <h2 className="text-4xl  font-semibold mb-4 text-[#39629e]">Tours & Packages: </h2>
                <p className="text-sm text-[#274061]  mb-8 md:w-3/4 mx-auto">Explore Sri Lanka with Serena Lanka Travels. Choose from a range of curated tours for an unforgettable experience...​</p>
            </div>

            {/* all blog */}
            <div className="relative">
                <Slider ref={sliderRef} {...settings}>
                    {blogs.map(blog => (
                        <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer px-8">
                            <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300" />
                            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                                <h3 className="mb-3 text-[#274061] font-semibold">{blog.title}</h3>
                                <p className="text-sm text-neutralGrey">{blog.place}</p>
                               
                            </div>
                        </div>
                    ))}
                </Slider>
                <button className="absolute top-1/2 transform -translate-y-1/2 left-2   text-[#787d83] bg-[#ccdcf3] p-1 rounded-full" onClick={prevSlide}><GrPrevious size={32} /></button>
                <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-[#787d83] bg-[#ccdcf3]  p-1 rounded-full" onClick={nextSlide}><GrNext size={32} /></button>
            </div>
        </div>
    );
}

export default Tours;
