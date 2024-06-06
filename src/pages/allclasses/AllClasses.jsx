import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../hooks/useAxiosPublic'
import Class from "./Class";
import { Pagination, Spinner } from "flowbite-react";
import { useState } from "react";
const AllClasses = () => {
    const axiosPublic = useAxiosPublic()
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = () => setCurrentPage(page);

    const { data, isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const { data } = await axiosPublic('/classes')
            return data
        }
    })
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    return (
        <div className="container mx-auto">
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">All Classes</h3>
            <div className="my-10 grid lg:grid-cols-3 gap-5">
                {
                    data?.map(singleData => <Class key={singleData?._id} singleData={singleData}></Class>)
                }
            </div>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination className="my-5" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
            </div>
        </div>
    );
};

export default AllClasses;