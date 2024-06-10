import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthProvider";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from './data';
import { Checkbox, Label } from "flowbite-react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const BeTrainer = () => {
    const axiosPublic = useAxiosPublic()
    const [selectedDays, setSelectedDays] = useState([])
    const { register, handleSubmit, reset } = useForm()
    const animatedComponents = makeAnimated()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = async(data) => {

        const newTrainer = {
            ...data,
            availableDays: selectedDays,
            status: 'pending',
            availableSlots: 0
        }

        await axiosPublic.post('/trainer', newTrainer)
        .then(res=>{
            reset()
            setSelectedDays([])
            toast('You have successfully applied')
            setTimeout(() => {
                navigate('/')
            }, 2000)
        })
        .catch(error=>{
            toast(error.message)
        })
        
    }
    const handleSelect = (options) => {
        setSelectedDays(options)
    }

    const skills = [
        "Strength Training",
        " Power Yoga",
        "Bodyweight Training",
        "Crossfit",
        "Aqua Aerobics",
       " TRX Suspension Training",
       "Stretching",
       "Spinning",
       "Meditation",
       "Kickboxing",
       "Functional Training",
       "Cardio Blast",
        "Zumba",
        "Pilates"
    ]

    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Be A Trainer</h3>

            <div className="w-full lg:w-1/2 p-10 rounded-lg bg-red-400 mx-auto mt-10">
                <form>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    placeholder="Full Name"
                                    type="text"
                                    {...register('name')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Full Name
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    type="text"
                                    value={user?.email}
                                    {...register('email')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Email
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    type="number"
                                    placeholder="Age"
                                    {...register('age')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Age
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    type="text"
                                    placeholder="Available Time"
                                    {...register('availableTime')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Available Time
                                </label>

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
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    id="id-l04"
                                    placeholder="Years of Experience"
                                    type="text"
                                    {...register('experience')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Years of Experience
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <Label className="text-lg font-medium text-white">Select Your Skills</Label>
                            <div className="grid grid-cols-2">
                            {
                                skills.map((skill, index)=> <div key={index} className="flex items-center gap-2">
                                    <Checkbox {...register('skills')} value={skill}id="remember" />
                                    <Label    className="text-white" htmlFor="remember">{skill}</Label> 
                                </div>)
                            }
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <Select
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            boxShadow: "none",
                                            border: "none",
                                            color: "white",
                                            backgroundColor: "transparent"
                                        })
                                    }}
                                    className="border border-white"
                                    closeMenuOnSelect={false}
                                    placeholder='Available days a week.'
                                    onChange={handleSelect}
                                    components={animatedComponents}
                                    isMulti
                                    options={colourOptions}
                                />
                            </div>
                        </div>
                        

                        <div className="col-span-full">
                            <div className="relative">
                                <textarea
                                    id="id-l02"
                                    type="text"
                                    placeholder="Bio"
                                    {...register('bio')}
                                    rows="3"

                                    className="peer relative w-full bg-transparent border-b border-slate-200 p-4 text-white placeholder-transparent outline-none transition-all invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-white"
                                ></textarea>
                                <label

                                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-white peer-required:after:content-['\00a0*'] peer-invalid:text-white peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-white peer-disabled:before:bg-transparent"
                                >
                                    Bio
                                </label>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <button onClick={handleSubmit(onSubmit)} className="inline-flex w-full h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:border-black hover:text-black focus: focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                                <span>Apply</span>
                            </button>
                        </div>
                    </div>
                </form>
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
            />
        </div>
    );
};

export default BeTrainer;