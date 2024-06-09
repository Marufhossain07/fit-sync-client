import { Link, useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { SiSkillshare } from "react-icons/si";
const Trainer = () => {
    const data = useLoaderData()
    const axiosSecure = useAxiosSecure()
    console.log(data);
    return (
        <div className="container mb-10 mx-auto">
            <div className="bg-cta space-y-3 py-20">
                <h3 className="font-sedan font-medium text-4xl text-center text-white">Do You Have The Skiils We Need ?</h3>
                <p className="text-lg font-sedan text-center text-white font-inter font-medium">Be Our Trainer</p>
                <div className="flex pt-5  justify-center"><Link to='/beTrainer'><a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-inter text-white shadow-lg shadow-red-600 font-semibold border border-white rounded dark:border-gray-800">Apply</a></Link></div>
            </div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Trainer Details</h3>
            <div className="flex gap-5 justify-around  flex-col md:flex-row lg:flex-row mt-10 border border-red-400 rounded-lg p-5">
                <div className="space-y-5 ">
                    <img className="border h-[550px] object-cover border-red-400 rounded-lg" src={data?.photo} alt="" />
                    <h3 className="font-inter font-medium text-xl">Experience : {data?.experience}</h3>
                    <h3 className="font-inter font-medium text-xl">Age : {data?.age}</h3>
                    <h3 className="font-inter font-medium text-xl">Email : {data?.email}</h3>
                    <div className="flex gap-3">
                        <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaFacebookF className="text-xl " /></p>
                        <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaTwitter className="text-xl " /></p>
                        <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaLinkedinIn className="text-xl " /></p>
                        <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaInstagram className="text-xl " /></p>
                    </div>
                </div>
                <div className="space-y-5">
                    <h3 className="font-inter font-semibold text-3xl">{data?.name}</h3>
                    <p className="font-inter font-medium">Fitness Trainer</p>

                    <h3 className="font-inter font-semibold text-2xl text-red-400">Bio:</h3>
                    <p>{data?.bio}</p>

                    <h3 className="font-inter font-semibold text-2xl text-red-400">Skills:</h3>
                    <div className="flex gap-3">
                        {
                            data?.skills.map((skill, index) => {
                                return <p key={index} className="border font-sedan font-medium border-red-400 p-5 rounded-lg"><SiSkillshare className="text-3xl" /> {skill}</p>
                            })
                        }
                    </div>
                    <h3 className="font-inter font-semibold text-2xl text-red-400">Available Days:</h3>
                    <div className="flex gap-5">
                        {
                            data?.availableDays.map((day, index) => {
                                return <p key={index} className=" font-sedan font-medium  flex gap-2 items-center rounded-lg"><CiCalendarDate className="text-3xl" /> {day.value}</p>
                            })
                        }
                    </div>
                    <h3 className="font-inter font-semibold text-2xl text-red-400">Available Time:</h3>
                    <p className=" font-sedan font-medium  flex gap-2 items-center rounded-lg"><MdAccessTime className="text-3xl" /> {data?.availableTime}</p>

                    <h3 className="font-inter font-semibold text-2xl text-red-400">Available Slots:</h3>

                </div>
            </div>
        </div>
    );
};

export default Trainer;