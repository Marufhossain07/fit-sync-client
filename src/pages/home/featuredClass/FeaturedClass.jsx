import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/heading/Heading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const FeaturedClass = () => {
    const axiosPublic = useAxiosPublic()
    const { data } = useQuery({
        queryKey: ['top-class'],
        queryFn: async () => {
            const { data } = await axiosPublic('/top-classes')
            return data
        }
    })

    return (
        <div className="my-10">
            <Heading title={'Our Top Booking Classes'} sub={'Featured Classes'}></Heading>

            <div className="grid mt-5 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.slice(0, 6).map(singleClass => <div key={singleClass?._id} className=" p-6 rounded-md shadow-md bg-red-400 text-white">
                        <img src={singleClass?.photo} className="rounded-lg" />
                        <div className="mt-6 mb-2">
                            <div className="flex justify-between">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600">{singleClass?.difficulty}</span>
                            <h3 className="font-medium">Total Bookings : {singleClass?.bookedCount}</h3>
                            </div>
                            <h2 className="text-2xl font-semibold tracking-wide">{singleClass.name}</h2>
                        </div>
                        <p className="font-medium dark:text-gray-800">{singleClass.details}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedClass;