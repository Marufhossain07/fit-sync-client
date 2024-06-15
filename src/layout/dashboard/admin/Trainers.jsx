import { Spinner } from "flowbite-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";

const Trainers = () => {
    const axiosSecure = useAxiosSecure()
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const { data } = await axiosSecure('/trainer')
            return data
        }
    });
    const handleDelete = (id,email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {

            if (result.isConfirmed) {
                await axiosSecure.delete(`/trainer?id=${id}&email=${email}`)
                    .then(res => {
                        if (res?.data?.result?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">All Trainers</h3>
            <div className="w-full mt-10 overflow-x-auto">
                <table className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">No</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">Name</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">Email</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">Action</th>

                        </tr>
                        {
                            data?.map((user, index) => {
                                return <tr key={user._id}>
                                    <th scope="row" className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{index + 1}</th>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{user?.name}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{user?.email}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "><button className="w-full" onClick={() => handleDelete(user?._id,user?.email)}><MdDelete className="text-2xl mx-auto" /></button></td>

                                </tr>
                            })
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Trainers;