import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const AddClass = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {
        const newClass = data;
        await axiosSecure.post('/add-class', newClass)
        .then(res=>{
            if(res.data.insertedId){
                
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "New Class has been added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            reset() 
        })
        .catch(error=>{
            toast.error(error.message)
        })

    }
    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">New Class Form</h3>

            <div className="w-full lg:w-1/2 p-10 rounded-lg bg-red-400 mx-auto mt-10">
                <form>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    placeholder="name"
                                    type="text"
                                    {...register('name')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Class Name
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    type="text"
                                    placeholder="duration"
                                    {...register('duration')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Duration
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    type="text"
                                    placeholder="capacity"
                                    {...register('capacity')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Capacity
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    type="text"
                                    placeholder="schedule"
                                    {...register('schedule')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Schedule
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <select
                                    required
                                    {...register('difficulty')}
                                    className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-transparent px-4 text-sm text-black outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                >
                                    <option value="" disabled selected></option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="All Level">All Level</option>
                                </select>
                                <label
                                    className="pointer-events-none bg-transparent absolute top-2.5 left-2 z-[1] px-2 text-sm text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white peer-disabled:cursor-not-allowed peer-disabled:text-white peer-disabled:before:bg-transparent"
                                >
                                    Select Difficulty
                                </label>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-white transition-all peer-focus:fill-white peer-disabled:cursor-not-allowed"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-labelledby="title-04 description-04"
                                    role="graphics-symbol"
                                >
                                    <title id="title-04">Arrow Icon</title>
                                    <desc id="description-04">Arrow icon of the select list.</desc>
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    placeholder="Photo URL"
                                    type="text"
                                    {...register('photo')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Photo URL
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full">
                            <div className="relative">
                                <textarea
                                    id="id-l02"
                                    type="text"
                                    placeholder="Details"
                                    {...register('details')}
                                    rows="3"

                                    className="peer relative w-full bg-transparent border-b border-slate-200 p-4 text-white placeholder-transparent outline-none transition-all invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-white"
                                ></textarea>
                                <label

                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-white peer-required:after:content-['\00a0*'] peer-invalid:text-white peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-white peer-disabled:before:bg-transparent"
                                >
                                    Details
                                </label>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <button onClick={handleSubmit(onSubmit)} className="inline-flex w-full h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:border-black hover:text-black focus: focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </form>
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

export default AddClass;