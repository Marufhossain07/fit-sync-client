import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../hooks/useAxiosPublic'
import Class from "./Class";
import { Spinner } from "flowbite-react";
const AllClasses = () => {
    const axiosPublic = useAxiosPublic()
    const {data, isLoading} = useQuery({
        queryKey:['classes'],
        queryFn: async () =>{
            const {data} = await axiosPublic('/classes')
            return data
        }
    })
    if(isLoading){
       return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    return (
        <div className="container mx-auto">
             <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">All Classes</h3>
            <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                data?.map(singleData=> <Class key={singleData?._id} singleData={singleData}></Class>)
            }
            </div>
        </div>
    );
};

export default AllClasses;