import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
const AllTrainers = () => {
    const axiosPublic = useAxiosPublic()
    const { data, isLoading } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const { data } = await axiosPublic('/trainer')
            return data
        }
    });
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>FitSync | All Trainers</title>
            </Helmet>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">All Trainer</h3>
           <div className="grid my-10 md:grid-cols-2 gap-3 lg:grid-cols-3">
           {
                data?.map(trainer => {
                  return  <div key={trainer._id} className="border rounded-lg space-y-3 border-[#003049] p-5">
                        <img className="h-[350px] mx-auto rounded-lg object-center object-cover" src={trainer?.photo} alt="" />
                        <h3 className="font-medium text-lg">{trainer?.name}</h3>
                        <p className="font-inter font-medium">Experience: {trainer?.experience}</p>
                        <div className="flex gap-3">
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-[#003049]"><FaFacebookF className="text-xl " /></p>
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-[#003049]"><FaTwitter className="text-xl " /></p>
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-[#003049]"><FaLinkedinIn className="text-xl " /></p>
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-[#003049]"><FaInstagram className="text-xl " /></p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-inter font-medium">Available Slots: {trainer?.availableSlots}</p>
                            <Link to={`/trainer/details/${trainer?.email}`}><button className="font-semibold font-sedan text-lg underline">Know More</button></Link>
                        </div>
                    </div>
                })
            }
           </div>
        </div>
    );
};

export default AllTrainers;