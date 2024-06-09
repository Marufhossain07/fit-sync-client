import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { Checkbox, Label } from "flowbite-react";
const AddSlot = () => {
    const axiosSecure = useAxiosSecure()
    const [trainer, setTrainer] = useState()
    const [classes, setClasses] = useState()
    const [selectedDays, setSelectedDays] = useState([])
    const { register, handleSubmit, reset, setValue } = useForm()
    const animatedComponents = makeAnimated()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure(`/trainer/${user?.email}`)
            .then(res => {
                setTrainer(res.data)
                setValue('name', res.data.name);
                setValue('age', res.data.age);
                setValue('availableTime', res.data.availableTime);
                setValue('photo', res.data.photo);
                setValue('experience', res.data.experience);
                
            })

        axiosSecure('/classes')
            .then(res => {
                setClasses(res.data)
            })
    }, [axiosSecure, setValue,user?.email])
    const onSubmit = async (data) => {
       const newSlot = {
        ...data,
        availableDays: selectedDays
       }
       
       await axiosSecure.post('/slot', newSlot)
       .then(res=>{
        if(res.data.insertedId){
            reset()
            toast('Slot has been successfully added!')
            setTimeout(() => {
                navigate('/dashboard/manage-slots')
            }, 1500)
        }
       })
       .catch(error=>{
        toast(error.message)
    })
        
       }
    
    const handleSelect = (options) => {
        setSelectedDays(options)
    }
    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Add New Slots</h3>
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
                                    trainer?.skills.map((skill, index) => <div key={index} className="flex items-center gap-2">
                                        <Checkbox {...register('skills')} value={skill} id="remember" />
                                        <Label className="text-white" htmlFor="remember">{skill}</Label>
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
                                    options={trainer?.availableDays}
                                />
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    placeholder="Slot Name"
                                    type="text"
                                    {...register('slot')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Slot Name
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <div className="relative my-6">
                                <input
                                    placeholder="Slot Time"
                                    type="text"
                                    {...register('slotTime')}
                                    required
                                    className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                                />
                                <label
                                    htmlFor="id-l04"
                                    className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Slot Time
                                </label>

                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <Label className="text-lg font-medium text-white">All Classes</Label>
                            <div>
                                {
                                    classes?.map((singleClass, index) => {
                                        return <div key={index} className="flex items-center gap-2">
                                            <Checkbox {...register('classes')} value={singleClass.name} id="remember" />
                                            <Label className="text-white" htmlFor="remember">{singleClass.name}</Label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-span-full">
                            <button onClick={handleSubmit(onSubmit)} className="inline-flex w-full h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:border-black hover:text-black focus: focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                                <span>Add Slot</span>
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

export default AddSlot;