import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from '/logo2.png';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation here
        if (formData.name && formData.email && formData.message) {
            // Your form submission logic goes here
            // For demonstration, let's display a success toast
            toast.success("Your form has been submitted. We will contact you soon!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // Clear form data after submission
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast.error("Please fill in all fields.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="contact">
            <ToastContainer />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
                    <h2 className="text-2xl font-semibold text-[#39629e] mb-6">Contact Information</h2>
                    <div className="flex-grow">
                        <p className="text-gray-800 mb-2">Address: 65 Main Street, Wadduwa, Sri Lanka</p>
                        <p className="text-gray-800 mb-2">Phone: +94 11 234 5678</p>
                        <p className="text-gray-800 mb-2">Email: info@serenalankatravels.com</p>
                    </div>
                    <div className="flex justify-center  mb-10">
                        <img src={contact} alt="Contact" className="w-64 h-56" />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-[#39629e]">Contact Form</h2>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 font-semibold">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-2 px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 font-semibold">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-2 px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-800 font-semibold">Message</label>
                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-2 px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
