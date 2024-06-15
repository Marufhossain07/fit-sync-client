import { useLoaderData, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { CiCalendarDate } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { Label, Modal, Textarea } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
const TrainerDetails = () => {
    const data = useLoaderData()
    const [openModal, setOpenModal] = useState(false);
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const onCloseModal = () => {
        setOpenModal(false);
    }
    const handleAccept = (email) => {
        axiosSecure.patch(`/applied/${email}`)
            .then(res => {
                if (res?.data?.result?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully accepted!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                        position: "center"
                    });
                    navigate('/dashboard/all-trainers')
                }
            })
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        const form = e.target;
        const feedback = form.feedback.value;
   
       const info = {
            id:data._id,
            feedback
       }
       await axiosSecure.put('/trainer/feedback', info)
       .then(res=>{
        if(res.data.modifiedCount > 0){
            toast('Application has been rejected!')
            setTimeout(() => {
                navigate('/dashboard/applied')
            }, 2000)
        }
       })
    }
    return (
        <div>
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

                    <div className="flex gap-5">
                        <button onClick={() => handleAccept(data?.email)} className='border px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049]  text-white text-lg font-medium'>
                            Accept
                        </button>
                        <button onClick={() => setOpenModal(true)} className='border px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049]  text-white text-lg font-medium'>
                            Reject
                        </button>
                            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                                <Modal.Header />
                                <Modal.Body>
                        <form onSubmit={handleSubmit}>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Rejection Feedback</h3>
                                        <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                                            <img src={data?.photo} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                                                <div className="my-2 space-y-1">
                                                    <h2 className="text-xl font-semibold sm:text-2xl">{data?.name}</h2>
                                                    <p className="px-5 text-xs sm:text-base dark:text-gray-600">{data?.bio}</p>
                                                </div>
                                                <div className="pt-2 space-x-4 align-center">
                                                    <h3 className="font-medium">Skills:</h3>
                                                    {
                                                        data?.skills.map((skill, index) => {
                                                            return <p key={index} className=" font-sedan font-medium "> {skill}</p>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="max-w-md">
                                            <div className="mb-2 block">
                                                <Label htmlFor="comment" value="Your Feedback" />
                                            </div>
                                            <Textarea name="feedback" id="comment" placeholder="Leave a Feedback..." required rows={4} />
                                        </div>
                                        <div className="w-full">
                                            <input className="border w-full px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049]  text-white text-lg font-medium" type="submit" value="Submit" />
                                        </div>
                                    </div>
                        </form>
                                </Modal.Body>
                            </Modal>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default TrainerDetails;