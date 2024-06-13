import { Label, TextInput, Textarea } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";


const AddForum = () => {
    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(AuthContext)
    const [role, setRole] = useState()
    const axiosSecure = useAxiosSecure()

    const { data } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/user/role/${user?.email}`)
            setRole(data?.role)
        }
    })

    const onSubmit = async data => {
        const newForum = {
            ...data,
            role: role,
            photo: user?.photoURL,
            name: user?.displayName
        }

        await axiosSecure.post('/forum', newForum)
            .then(res => {
                if (res.data.insertedId) {
                    reset()
                    toast('Forum has been successfully added!')
                }
            })
            .catch(error => {
                toast(error.message)
            })

    }

    return (
        <div>
            <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Add Forum</h3>

            <div className="mt-10 w-full lg:w-1/2 mx-auto p-5 bg-red-400 rounded-lg border">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" className="text-xl" value="Title" />
                        </div>
                        <TextInput id="input-gray" {...register('title')} placeholder="Title" required color="gray" />
                    </div>
                    <div className="">
                        <div className="my-2 block">
                            <Label htmlFor="comment" className="text-xl" value="Details" />
                        </div>
                        <Textarea id="comment" {...register('details')} placeholder="Leave your message..." required rows={4} />
                    </div>
                    <input className="border mt-5 w-full px-4 py-3 rounded-lg hover:opacity-50 bg-[#003049] text-lg font-medium" type="submit" value="Submit" />
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

export default AddForum;