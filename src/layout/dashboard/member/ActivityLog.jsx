import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../hooks/useAxiosPublic"
import { Modal, Spinner } from "flowbite-react"
import { FaRegEye } from "react-icons/fa"
import { useState } from "react"

const ActivityLog = () => {
    const axiosPublic = useAxiosPublic()
    const [feedback, setFeedback] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const { data, isLoading } = useQuery({
        queryKey: ['applied'],
        queryFn: async () => {
            const { data } = await axiosPublic('/activity-log')
            return data
        }
    })
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }

    const handleFeedback = id =>{
        axiosPublic(`/trainer/feedback/${id}`)
        .then(res=>{
            setFeedback(res.data.feedback);
        })
    }
    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Activity Log</h3>
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
                                    <td className="h-12  px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{user?.status === 'rejected' ? <div className="flex justify-center items-center gap-2"> <p className="text-center"> Rejected</p> <button onClick={() =>{ handleFeedback(user?._id), setOpenModal(true)}}> <FaRegEye className="text-2xl " /></button> </div> : 'Pending'}</td>

                                </tr>
                            })
                        }

                    </tbody>

                </table>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Feedback of Admin</Modal.Header>
                    <Modal.Body>
                        <div>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {feedback}
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}
export default ActivityLog;