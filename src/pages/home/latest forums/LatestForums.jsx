import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/heading/Heading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const LatestForums = () => {
    const axiosPublic = useAxiosPublic()
    const { data } = useQuery({
        queryKey: ['latest-forums'],
        queryFn: async () => {
            const { data } = await axiosPublic('/forum')
            return data
        }
    })
    return (
        <div>
            <Heading title={'Forum With Valuable Learnings'} sub={'Latest Forum posts'}></Heading>
            <div className="my-10 grid md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    data?.slice(0, 6).map(forum => <div key={forum._id} className="max-w-md p-6 overflow-hidden rounded-lg shadow  bg-red-400 text-white">
                        <article className="flex flex-col justify-between h-full">
                            <h2 className="text-xl font-bold">{forum?.title}</h2>
                            <p className="mt-4 dark:text-gray-600">{forum?.details}</p>
                            <div className="flex justify-between mt-8 items-center">
                                <div className="flex items-center  space-x-4">
                                    <img src={forum?.photo} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                                    <div>
                                        <h3 className="text-sm font-medium">{forum?.name}</h3>
                                        <h3 className="bg-blue-200 text-blue-500 rounded-md text-center">{forum?.role.toUpperCase()}</h3>
                                    </div>
                                    
                                </div>
                                <Link to='/community'><button className='border px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049]  text-white text-lg font-medium'>
                                        See More
                                    </button></Link>
                            </div>
                        </article>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestForums;