
import { Spinner } from "flowbite-react";
import Heading from "../../../components/heading/Heading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { SiSkillshare } from "react-icons/si";


const TeamSection = () => {
    const axiosPublic = useAxiosPublic()
    const { data, isLoading } = useQuery({
        queryKey: ['team'],
        queryFn: async () => {
            const { data } = await axiosPublic('/trainer')
            return data
        }
    })
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    return (
        <div className="my-10">
            <Heading title={'Meet With Our Experts'} sub={"Our Team"}></Heading>

            <div  className="my-10 flex flex-col md:flex-row lg:flex-row gap-5 justify-around">
                {
                    data?.slice(0,3).map(trainer => <div key={trainer._id} className="space-y-5 border-2 bg-slate-200 p-5 border-[#003049] rounded-lg">
                        <img className="border h-[550px] mx-auto object-cover border-red-400 rounded-lg" src={trainer?.photo} alt="" />
                        <h3 className="font-sedan font-semibold text-xl">{trainer?.name}</h3>
                        <h3 className="font-inter font-medium text-xl">{trainer?.bio}</h3>
                        
                        <h3 className="font-inter flex gap-2 font-medium text-xl"><SiSkillshare className="text-3xl" />: {trainer?.skills.map((skill,index)=> <span className=" flex gap-1 border " key={index}>{skill}</span>)}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TeamSection;