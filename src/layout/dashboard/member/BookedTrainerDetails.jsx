import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import '@smastrom/react-rating/style.css'
import { useQuery } from "@tanstack/react-query";
import { CiCalendarDate } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Modal, Spinner, Textarea } from "flowbite-react";
import { Rating } from "@smastrom/react-rating";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const BookedTrainerDetails = () => {
    const trainer = useLoaderData()
    const [slots, setSlots] = useState()
    const [rating, setRating] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const [classes, SetClasses] = useState([])
    const {register, handleSubmit , reset} = useForm()
    const { data, isLoading } = useQuery({
        queryKey: ['available-slots'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/available-slots/${trainer?.email}`)
            setSlots(data)
            return data
        }
    })

    const onCloseModal = () => {
        setOpenModal(false);
    }
    useEffect(() => {
        const getClasses = async () => {
            const { data } = await axiosSecure(`/trainers/classes/${trainer?.skills}`)
            SetClasses(data)
        }
        getClasses()
    }, [axiosSecure, trainer?.skills])


    const onSubmit =async data =>{
        const newReview = {
            ...data,
            ratings: rating,
            name: user?.displayName,
            photo: user?.photoURL
        }
        await axiosSecure.post('/review', newReview)
        .then(res=>{
            if(res.data.insertedId){
                reset()
                toast('Review has been successfully added!')
                setOpenModal(false);
                setRating(0)

            }
        })
        .catch(error => {
            toast.error(error.message)
        })

    }
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    return (
        <div className="container mx-auto">
            <h3 className="font-sedan mb-10 text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Trainer Details</h3>
            <div className="border my-10 rounded-lg p-5 border-red-400">
                <div className="flex gap-5 justify-around  flex-col md:flex-row lg:flex-row  rounded-lg ">
                    <div className="space-y-5 ">
                        <img className="border h-[550px] object-cover border-red-400 rounded-lg" src={trainer?.photo} alt="" />
                        <h3 className="font-inter font-medium text-xl">Experience : {trainer?.experience}</h3>
                        <h3 className="font-inter font-medium text-xl">Age : {trainer?.age}</h3>
                        <h3 className="font-inter font-medium text-xl">Email : {trainer?.email}</h3>
                        <div className="flex gap-3">
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaFacebookF className="text-xl " /></p>
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaTwitter className="text-xl " /></p>
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaLinkedinIn className="text-xl " /></p>
                            <p className="border-2 rounded-full p-3 hover:bg-red-400 hover:text-white hover:border-black hover:cursor-pointer border-red-400"><FaInstagram className="text-xl " /></p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h3 className="font-inter font-semibold text-3xl">{trainer?.name}</h3>
                        <p className="font-inter font-medium">Fitness Trainer</p>

                        <h3 className="font-inter font-semibold text-2xl text-red-400">Bio:</h3>
                        <p>{trainer?.bio}</p>

                        <h3 className="font-inter font-semibold text-2xl text-red-400">Skills:</h3>
                        <div className="flex gap-3">
                            {
                                trainer?.skills.map((skill, index) => {
                                    return <p key={index} className="border font-sedan font-medium border-red-400 p-5 rounded-lg"><SiSkillshare className="text-3xl" /> {skill}</p>
                                })
                            }
                        </div>
                        <h3 className="font-inter font-semibold text-2xl text-red-400">Available Days:</h3>
                        <div className="flex gap-5">
                            {
                                trainer?.availableDays.map((day, index) => {
                                    return <p key={index} className=" font-sedan font-medium  flex gap-2 items-center rounded-lg"><CiCalendarDate className="text-3xl" /> {day.value}</p>
                                })
                            }
                        </div>
                        <h3 className="font-inter font-semibold text-2xl text-red-400">Available Time:</h3>
                        <p className=" font-sedan font-medium  flex gap-2 items-center rounded-lg"><MdAccessTime className="text-3xl" /> {trainer?.availableTime}</p>

                        <h3 className="font-inter font-semibold text-2xl text-red-400">Available Slots:</h3>
                        <div className="flex gap-1">
                            {
                                slots?.map(slot => <h3 key={slot?._id} className="border rounded-lg font-medium bg-red-400 p-4 text-white hover:opacity-50">{slot?.slot}</h3>)
                            }
                        </div>
                    </div>
                </div>
                <h3 className="font-inter  font-semibold ml-24 mt-2 text-4xl text-red-400">Classes:</h3>
                <div className="flex flex-col justify-center gap-5 md:flex-row lg:flex-row">
                    {
                        classes.map(singleClass => <div key={singleClass?._id} className="max-w-xs p-6 rounded-md shadow-md bg-red-400 text-white">
                            <img src={singleClass?.photo} className="rounded-lg" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600">{singleClass?.difficulty}</span>
                                <h2 className="text-xl font-semibold tracking-wide">{singleClass.name}</h2>
                            </div>
                            <p className="dark:text-gray-800">{singleClass.details}</p>
                        </div>)
                    }
                </div>
                <div className="w-full flex justify-end">
                    <button onClick={() => setOpenModal(true)} className='border  text-center px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049]  text-white text-lg font-medium'>
                        Review
                    </button>
                    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                        <Modal.Header />
                        <Modal.Body>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                                    <div className="flex flex-col items-center w-full">
                                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                        <div className="flex flex-col items-center py-6 space-y-3">
                                            <span className="text-center">How was your experience?</span>
                                            <div>
                                                <Rating
                                                    style={{ maxWidth: 180 }}
                                                    value={rating}
                                                    onChange={setRating}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <Textarea {...register('review')} id="comment" placeholder="Leave a review..." required rows={4} />
                                            <input className="border w-full mt-5 px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049]  text-white text-lg font-medium" type="submit" value="Submit" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
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

export default BookedTrainerDetails;