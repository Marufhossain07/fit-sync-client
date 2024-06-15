import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: ['admin'],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/users/admin/${user?.email}`)
            return data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]

};

export default useAdmin;