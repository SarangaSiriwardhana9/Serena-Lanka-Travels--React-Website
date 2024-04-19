import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blog1 from "../assets/icons/blog1.png";
import blog2 from "../assets/icons/blog2.png";
import blog3 from "../assets/icons/blog3.png";

const Tours = () => {
    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blog1 },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: blog2 },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
        { id: 4, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
        { id: 5, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
        { id: 6, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
        { id: 7, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
        { id: 8, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <path fill="#000000" d="M11.85 18l7.125-6.375L16.575 9 9 18 16.575 27l2.4-2.625L11.85 18z" />
                </svg>
            </div>
        );
    }

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <path fill="#000000" d="M24.15 18l-7.125 6.375L19.425 27l7.575-9-7.575-9-2.4 2.625L24.15 18z" />
                </svg>
            </div>
        );
    }

    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
            <div className="text-center md:w-1/2 mx-auto">
                <h2 className="text-4xl text-neutralDgrey font-semibold mb-4">Tours & Packages: </h2>
                <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">Display different tour packages available, including details like itinerary, pricing, and inclusions..​</p>
            </div>

            {/* all blog */}
            <Slider {...settings}>
                {blogs.map(blog => (
                    <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                        <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300" />
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h3 className="mb-3 text-neutralDgrey font-semibold">{blog.title}</h3>
                            <div className="flex items-center justify-center gap-8"><a href='/' className="font-bold text-brandPrimary hover:text-neutral-700">Readmore</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                                    <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" className="inline-block ml-2" />
                                </svg></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Tours;
