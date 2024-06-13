import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "react-toastify";
import { BiDownvote, BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi";

const Forums = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [forumPerPage, setForumPerPage] = useState(6)
    const { data } = useQuery({
        queryKey: ['forums', upVote, currentPage],
        queryFn: async () => {
            const { data } = await axiosPublic(`/all-forums?page=${currentPage}&size=${forumPerPage}`)
            return data
        }
    })
    console.log(data);
    const handlePagination = (value) => {
        setCurrentPage(value);
    }

    const handleUpVote = async (id) => {

        if (!user) {
            toast.error('Please Login to use this feature', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setTimeout(() => {
                navigate('/login')
            }, 2000)

        }
        else {
            if (!upVote) {
                await axiosPublic.patch(`/forum/upvote/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            setUpVote(true)
                        }
                    })
                    .catch(error => {
                        toast.error(error.message)
                    })
            }
            else {
                await axiosPublic.patch(`/forum/downvote/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            setUpVote(false)
                        }
                    })
                    .catch(error => {
                        toast.error(error.message)
                    })
            }
        }




    }
    useEffect(() => {
        const getCount = async () => {
            const { data } = await axiosPublic('/forums-count')
            setCount(data.result)
        }
        getCount()
    }, [axiosPublic])

    const handleDownVote = () =>{
        if (!user) {
            toast.error('Please Login to use this feature', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
        else{
            setDownVote(!downVote)
        }
    }

    const totalPages = Math.ceil(count / forumPerPage)
    const pages = [...Array(totalPages).keys()].map(element => element + 1)
    return (
        <div className="container mx-auto">
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Community</h3>
            <div className="my-10 grid md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    data?.map(forum => <div key={forum._id} className="max-w-md p-6 overflow-hidden rounded-lg shadow  bg-red-400 text-white">
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
                                <div className="flex">
                                    <button onClick={() => handleUpVote(forum?._id)} className={`flex bg-white py-1 px-3 rounded-l-full  ${upVote ? 'text-red-400' : 'text-black'} items-center font-medium gap-2`}>{upVote ? <BiSolidUpvote className=" text-lg" /> : <BiUpvote className=" text-lg" />} UpVote - {forum? forum.upvote : 0}</button>
                                    <button onClick={handleDownVote} className={`flex bg-white py-1 px-3 border-l rounded-r-full ${downVote ? 'text-red-400' : 'text-black'}  items-center gap-2`}>{downVote ? <BiSolidDownvote  className=" text-xl" /> : <BiDownvote className=" text-xl" />}</button>
                                </div>
                            </div>
                        </article>
                    </div>)
                }
            </div>
            <div className='flex justify-center my-12'>
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    className='px-4 py-2 mx-1 bg-[#003049] text-white disabled:text-gray-500 capitalize rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-red-400  hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>Prev</span>
                    </div>
                </button>
                {pages.map(page => (
                    <button
                        onClick={() => handlePagination(page)}
                        key={page}
                        className={`hidden ${currentPage === page ? 'bg-[#003049] text-white' : ''
                            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-red-400  hover:text-white`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePagination(currentPage + 1)}
                    className='px-4 py-2 mx-1 bg-[#003049] text-white transition-colors duration-300 transform  rounded-md hover:bg-red-400 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </div>
    );
};

export default Forums;