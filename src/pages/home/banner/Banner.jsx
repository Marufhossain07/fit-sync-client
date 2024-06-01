import { Link } from 'react-router-dom';
import banner1 from '../../../assets/banner1.jfif'
const Banner = () => {
    return (
        <div>
            <section className='text-white bg-black rounded-lg border border-red-600'>
                <div className="container flex flex-col justify-center p-6 mx-auto py-12 lg:py-24 lg:flex-row lg:justify-around">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="lg:text-6xl md:text-5xl font-bold leading-none text-4xl">Your Ultimate <span className='text-[#d62828]'>Fitness</span> Destination
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Discover the ultimate fitness destination where your goals are our mission. From beginners to athletes, we provide the tools and support to reach new heights.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/all-classes'><a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-inter shadow-lg shadow-red-600 font-semibold border border-white rounded dark:border-gray-800">All Classes</a></Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={banner1} alt="" className="h-72 sm:h-80 lg:h-[450px] " />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;