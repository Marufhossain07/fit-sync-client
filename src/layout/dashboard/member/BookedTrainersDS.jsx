import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import animationData from "../../../lottie/empty.json"
import Lottie from "react-lottie";
const BookedTrainerDS = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['booked-trainers'],
        queryFn: async () => {
            const { data } = await axiosPublic(`/trainer/booked/${user.email}`)
            return data
        }
    });
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Booked Trainers</h3>
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
                                    <td className="h-12 text-center px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{user?.name}</td>
                                    <td className="h-12 text-center px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{user?.email}</td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "><Link to={`/dashboard/booked-trainer/${user?.email}`}><button className="w-full"><FaRegEye className="text-2xl mx-auto" /></button></Link></td>

                                </tr>
                            })
                        }

                    </tbody>
                </table>
                {
                    data.length === 0 && <div className="w-full">
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                        <h3 className="text-4xl mb-5 text-center text-red-600 font-semibold">Opps! Nothing to here!</h3>
                    </div>
                }
            </div>
        </div>
    );
}
export default BookedTrainerDS;