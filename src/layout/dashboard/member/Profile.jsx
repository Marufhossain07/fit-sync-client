import { useContext } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext)
    const auth = getAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, reset } = useForm()
    console.log(user);
    const onSubmit = async (data) => {
        setValue('email', user?.email)
        console.log(data);

        await axiosPublic.patch('/user', data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast('Your profile has been successfully update')
                    reset()
                    if (data.name.length > 0) {
                        updateProfile(auth.currentUser, {
                            displayName: data.name
                        })
                            .then(() => {
                            })
                            .catch(() => {

                            });
                    }
                    if (data.photo.length > 0) {
                        updateProfile(auth.currentUser, {

                            photoURL: data.photo
                        })
                            .then(() => {
                            })
                            .catch(() => {

                            });
                    }
                    setTimeout(() => {
                        navigate('/')
                    }, 1500)
                }
            })

    }

    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">User Profile</h3>
            <div className="flex justify-center my-5 w-3/4 mx-auto rounded-lg bg-red-400">
                <div className=" rounded-lg space-y-2  p-6 dark:bg-gray-50 dark:text-gray-800">
                    <img src={user?.photoURL} alt="" className="flex-shrink-0 border border-white rounded-lg object-cover h-64 sm:h-96 dark:bg-gray-500 aspect-square" />
                    <div className="space-y-2 text-white">
                        <h2 className="text-xl font-semibold">Name : {user?.displayName}</h2>
                        <h3 className="font-medium">Email : {user?.email}</h3>

                        <h3 className="font-medium">Last Login: {user?.metadata?.lastSignInTime}</h3>
                    </div>
                </div>
                <div className=" w-full  p-5 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                        <h3 className="font-sedan text-center text-white mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Update Profile</h3>
                        <div className="relative my-6">
                            <input

                                type="text"
                                {...register("name")}
                                placeholder="Your Name"
                                required
                                className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                            />
                            <label
                                htmlFor="id-l04"
                                className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your Name
                            </label>

                        </div>
                        <div className="relative my-6">
                            <input

                                type="email"
                                {...register("email")}
                                value={user?.email}
                                placeholder="Your Email"
                                required
                                className="peer relative h-12 w-full border-b bg-transparent border-slate-200 px-4  placeholder-transparent outline-none transition-all text-white   focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                            />
                            <label
                                htmlFor="id-l04"
                                className="absolute left-2 -top-2 z-[1] bg-transparent cursor-text px-2 font-medium text-white transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:content-['\00a0*']  peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your Email
                            </label>

                        </div>
                        <div className="relative my-6">
                            <input

                                type="text"
                                {...register("photo")}
                                placeholder="Photo URL"
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

                        <button className="inline-flex w-full h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:border-red-600 hover:text-red-500 focus: focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                            <span>Update</span>
                        </button>
                    </form>
                </div>
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

export default Profile;