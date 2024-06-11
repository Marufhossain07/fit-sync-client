import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../hooks/useAxiosPublic'
import Class from "./Class";
import { Pagination, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
const AllClasses = () => {
    const axiosPublic = useAxiosPublic()
    const [count, setCount] = useState(0)
    const [searchText, setSearchText] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [classPerPage, setClassPerPage] = useState(6)
    const { data, isLoading } = useQuery({
        queryKey: ['classes', currentPage, searchText],
        queryFn: async () => {
            const { data } = await axiosPublic(`/all-classes?page=${currentPage}&size=${classPerPage}&search=${searchText}`)
            return data
        }
    })
    const handleSearch = e => {
        e.preventDefault()
        setSearchText(e.target.search.value)
    }
    const handlePagination = (value) => {
        setCurrentPage(value);
    }

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axiosPublic('/classes-count')
            setCount(data.result)
        }
        getCount()
    }, [axiosPublic])
    console.log(count, classPerPage);
    const totalPages = Math.ceil(count / classPerPage)
    const pages = [...Array(totalPages).keys()].map(element => element + 1)

    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>FitSync | All Classes</title>
            </Helmet>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">All Classes</h3>
            <form onSubmit={handleSearch}>
                {/*<!-- Component: Rounded basic large search input--> */}
                <div className="relative w-full md:w-1/2 lg:w-1/2 mx-auto my-6">
                    <input
                        id="id-s04"
                        type="search"
                        name="search"
                        placeholder="Search here"
                        aria-label="Search content"
                        className="peer relative h-12 w-full rounded border border-slate-200 px-4 pr-12 text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />
                    <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-4 top-3 h-7 w-7 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                        aria-label="Search icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    </button>
                </div>
                {/*<!-- End Rounded large search input--> */}
            </form>

            <div className="my-10 grid lg:grid-cols-3 gap-5">
                {
                    data?.map(singleData => <Class key={singleData?._id} singleData={singleData}></Class>)
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
        </div>
    );
};

export default AllClasses;