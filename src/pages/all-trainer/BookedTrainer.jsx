import { useLoaderData } from "react-router-dom";

const BookedTrainer = () => {
    const data = useLoaderData()
    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Booking Trainer</h3>
            <div>
                <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl mx-auto mb-16 text-center">
                            <span className="font-bold tracking-wider uppercase dark:text-default-600">Pricing</span>
                            <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                        </div>
                        <div className="flex flex-wrap  items-stretch -mx-4">
                            <div className="flex w-full mb-8 sm:px-4  md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-grow bg-red-400 text-white flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Basic</h4>
                                        <span className="text-6xl font-bold">$10
                                            <span className="text-sm tracking-wide">/month</span>
                                        </span>
                                    </div>
                                    <ul className="flex-1 mb-6 dark:text-gray-600">
                                        <li className="flex mb-2 space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-default-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Access to gym facilities during
                                                regular operating hours.</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-default-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Use of cardio and strength
                                                training equipment.</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-default-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span> Access to locker rooms and
                                                showers.</span>
                                        </li>
                                    </ul>
                                    <button className='border px-4 py-3 rounded-lg hover:bg-red-400 hover:text-black bg-[#003049]  text-white text-lg font-medium'>Select</button>
                                </div>
                            </div>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-grow flex-col bg-red-400 text-white p-6 space-y-6 rounded shadow sm:p-8 dark:bg-default-600 dark:text-gray-50">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Standard</h4>
                                        <span className="text-6xl font-bold">$50
                                            <span className="text-sm tracking-wide">/month</span>
                                        </span>
                                    </div>
                                    <ul className="flex-1 space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>All benefits of the basic
                                                membership.</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Access to group fitness classes
                                                such as yoga, spinning, and
                                                Zumba.</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Use of additional amenities
                                                like a sauna or steam room</span>
                                        </li>
                                    </ul>
                                    <button className='border px-4 py-3 rounded-lg hover:bg-red-400 hover:text-black bg-[#003049]  text-white text-lg font-medium'>Select</button>
                                </div>
                            </div>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-grow bg-red-400 text-white flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Premium</h4>
                                        <span className="text-6xl font-bold">$100
                                            <span className="text-sm tracking-wide">/month</span>
                                        </span>
                                    </div>
                                    <ul className="space-y-2 dark:text-gray-600">
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-default-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>All benefits of the standard
                                                membership.</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-default-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Access to personal training
                                                sessions with certified trainers.</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-default-600">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Discounts on additional
                                                services such as massage
                                                therapy or nutrition
                                                counseling.</span>
                                        </li>
                                    </ul>
                                    <button className='border px-4 py-3 rounded-lg hover:bg-red-400 hover:text-black bg-[#003049]  text-white text-lg font-medium'>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BookedTrainer;