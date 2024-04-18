import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";
import logo1 from "/logo1.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Nav items array
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4  ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={logo1} className="w-60 inline-block items-center" alt="" />
                       
                    </a>
                    {/* Nav items for large screens */}
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) =>
                            <ScrollLink key={path} to={path} spy={true} smooth={true} offset={-100} className="block text-base text-gray-900 hover:text-brandPrimary">{link}</ScrollLink>
                        )}
                    </ul>

                    
                    {/* menu btn only for mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none focus:text-gray-500">
                            {
                                isMenuOpen ? (<FaTimes className="h-6 w-6 text-neutralDgrey" />) : (<FaBars className="h-6 w-6 text-neutralDgrey" />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            {/* nav items for mobile device */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path }) =>
                    <ScrollLink key={path} to={path} spy={true} smooth={true} offset={-100} onClick={toggleMenu} className="block text-base text-white hover:text-brandPrimary first:font-medium">{link}</ScrollLink>
                )}
            </div>
        </header>
    );
};

export default Navbar;
