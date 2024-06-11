import { useContext } from "react";

import { AuthContext } from "../../auth/AuthProvider"
import { useLoaderData, useNavigate,  } from "react-router-dom";
import { PackageContext } from "../../auth/PackageProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
const Payment = () => {
    const data = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const { packages, setPackages } = useContext(PackageContext)
    console.log(packages)
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const newPayment ={
            slotId: data._id,
            classes: data.classes,
            name: user.displayName,
            email: user.email,
            trainerEmail: data?.email
        }
        await axiosSecure.post('/payment', newPayment)
        .then(res=>{
            if(res.data.insertedId){
                setPackages('')
                toast('You have successfully Booked a Trainer!')
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
           })
           .catch(error=>{
            toast(error.message)
        })
    }
    return (
        <div className="container mx-auto">
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Payment Confirmation</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex mx-auto my-10 rounded-lg bg-red-400 text-white flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <h2 className="text-2xl font-semibold">Booking Details</h2>
                        <ul className="flex flex-col pt-4 space-y-2">
                            <li className="flex items-start justify-between">
                                <h3 className="text-lg font-medium">Trainer : {data?.name}
                                </h3>

                            </li>
                            <li className="flex items-start justify-between">
                                <h3 className="font-medium">Slot : {data?.slot}
                                </h3>
                            </li>
                            <li className="flex items-start justify-between">
                                <h3 className="font-medium">Membership : {packages?.membership?.toUpperCase()}
                                </h3>
                            </li>
                            <li className="flex items-start justify-between">
                                <h3>Price :
                                </h3>
                                <div className="text-right">
                                    <span className="block font-medium">${packages.price}</span>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-4 space-y-2">
                            <div>
                                <div className="flex justify-between">
                                    <span>Total</span>
                                    <span className="font-medium">${packages.price}</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 space-y-2">
                            <h2 className="text-2xl font-semibold">User Details</h2>
                            <h3 className="text-lg font-medium">{user?.displayName}</h3>
                            <h3 className="font-medium">{user?.email}</h3>
                            <div className="space-y-6">
                                <input className="w-full py-2 font-semibold border rounded hover:bg-white hover:text-red-400 dark:bg-default-600 dark:text-gray-50 dark:border-default-600" type="submit" value="Confirm" />
                            </div>
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

export default Payment;