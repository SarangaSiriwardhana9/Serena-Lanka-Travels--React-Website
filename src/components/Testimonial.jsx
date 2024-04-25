import user1 from "/user1.jpeg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";

const Testimonial = () => {
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
            <div className="flex items-center justify-center lg:w-2/3 mx-auto">
                <h2 className="text-4xl font-semibold mb-8 text-[#39629e]">Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="flex items-center mb-4">
                        <img src={user1} alt="User 1" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                            <p className="text-gray-800 font-semibold">John Doe</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">"Serena Lanka Travels made our trip to Sri Lanka unforgettable. The attention to detail and personalized service were exceptional. Can't wait to go back!"</p>
                    <p className="text-gray-800 font-semibold">- John Doe, Travel Enthusiast</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="flex items-center mb-4">
                        <img src={user2} alt="User 2" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                            <p className="text-gray-800 font-semibold">Jane Smith</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">"Our experience with Serena Lanka Travels was fantastic. The itinerary was well-planned, and the guides were knowledgeable. Highly recommend!"</p>
                    <p className="text-gray-800 font-semibold">- Jane Smith, Adventure Seeker</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="flex items-center mb-4">
                        <img src={user3} alt="User 3" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                            <p className="text-gray-800 font-semibold">Alice Johnson</p>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0l2.5 7.5H20l-6 4.583L15 20l-5-3.75L5 20l1.5-8.917-6-4.583h7.5L10 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">"Booking with Serena Lanka Travels was a great decision. The accommodations were top-notch, and the entire trip was seamless. Will definitely book with them again!"</p>
                    <p className="text-gray-800 font-semibold">- Alice Johnson, Nature Lover</p>
                </div>
            </div>
        </div>
    );
}






export default Testimonial;
