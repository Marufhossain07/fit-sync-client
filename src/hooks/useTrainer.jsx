import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useTrainer = () => {
    const {user,loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: isTrainer, isPending: isTrainerLoading} = useQuery({
        queryKey: ['trainer-role'],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`/from-users/trainer/${user?.email}`)
            console.log(data)
            return data?.trainer;
        }
    })
    return [isTrainer,isTrainerLoading]

};

export default useTrainer;